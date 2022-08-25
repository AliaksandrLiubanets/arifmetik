import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, memo, useCallback, useEffect, useState} from 'react'
import s from '../Game/Game.module.css'
import {Answer} from '../Answer/Answer'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import useSound from 'use-sound'
import right_sound from '../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../assets/sounds/wrong_answer_sound.mp3'
import {Actions} from '../Actions/Actions'
import {PreStart} from '../PreStart/PreStart'

type Props = {
    numberComp: number
    timeoutValue: number
    actionsCount: number
    startGame: (isStarted: boolean) => void
    restartGame: () => void
    makeActionsArrayAndAnswer: () => void
    actionsArray: string[]
    answer: number
    isSoundOn: boolean
    isRocket: boolean
    setIsRocket: (isRocket: boolean) => void
}

export const Game: FC<Props> = memo(({
                                         numberComp,
                                         timeoutValue,
                                         actionsCount,
                                         startGame,
                                         restartGame,
                                         actionsArray,
                                         answer,
                                         isSoundOn,
                                         makeActionsArrayAndAnswer,
                                         isRocket,
                                         setIsRocket
                                     }) => {
        const [inputAnswer, setInputAnswer] = useState(0)
        const [isShowInput, setIsShowInput] = useState(false)
        const [isShowAnswer, setIsShowAnswer] = useState(false)
        const [isFocus, setIsFocus] = useState(true)

        const [right] = useSound(right_sound)
        const [wrong] = useSound(wrong_sound)

        useEffect(() => {
            let id = setTimeout(() => {
                if (isRocket) {
                    startGame(true)
                    restartGame()
                    setIsRocket(false)
                }
            }, 1000)
            return () => {
                clearInterval(id)
            }
        }, [isRocket, startGame, restartGame, setIsRocket])

        const answerSound = () => inputAnswer === answer ? right() : wrong()
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputAnswer(e.currentTarget.valueAsNumber)
        const handleBackToSettings = () => startGame(false)
        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
        const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                setIsShowAnswer(true)
                setIsFocus(false)
                answerSound()
            }
        }
        const nextExercise = useCallback(() => {
            setIsShowAnswer(false)
            setIsShowInput(false)
            setIsFocus(false)
            setInputAnswer(0)
            makeActionsArrayAndAnswer()
            // restartGame()
            setIsRocket(true)
        }, [makeActionsArrayAndAnswer, restartGame])

        const showInput = useCallback((isShowInput: boolean) => setIsShowInput(isShowInput), [])
        const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

        return (
            <div className={s.game}>
                {isRocket
                    ? <PreStart/>
                    : <>
                        <button onClick={handleBackToSettings}>Назад</button>
                        {!isShowAnswer
                            ? <Actions actionsArray={actionsArray}
                                       actionsCount={actionsCount}
                                       numberComp={numberComp}
                                       timeoutValue={timeoutValue}
                                       isSoundOn={isSoundOn}
                                       showInput={showInput}
                                       focusOnElement={focusOnElement}
                            />
                            : <Answer answer={answer} inputAnswer={inputAnswer}/>
                        }
                        {isShowInput &&
                        <div className={s.answer_input}>
                            {isFocus
                                ? <input
                                    type="number"
                                    value={inputAnswer}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    autoFocus={isFocus}
                                    onKeyPress={handleEnterPress}
                                />
                                : <ButtonNext isOnFocus={!isFocus} callback={nextExercise}/>
                            }

                        </div>
                        }
                    </>
                }
            </div>
        )
    }
)

