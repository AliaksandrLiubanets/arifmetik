import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, useEffect, useState} from 'react'
import s from '../Game/Game.module.css'
import {Answer} from '../Answer/Answer'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import useSound from 'use-sound'
import right_sound from '../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../assets/sounds/wrong_answer_sound.mp3'
import {Actions} from '../Actions/Actions'

type Props = {
    numberComp: number
    timeoutValue: number
    actionsCount: number
    setIsStarted: (isStarted: boolean) => void
    setRestart: (restart: boolean) => void
    makeActionsArrayAndAnswer: () => void
    actionsArray: string[]
    restart: boolean
    answer: number
}

export const Game: FC<Props> = ({
                                    numberComp,
                                    timeoutValue,
                                    actionsCount,
                                    setIsStarted,
                                    setRestart,
                                    restart,
                                    actionsArray,
                                    answer,
                                    makeActionsArrayAndAnswer
                                }) => {
    const [inputAnswer, setInputAnswer] = useState(0)
    const [showInput, setShowInput] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [focus, setFocus] = useState(true)

    console.log('actionsArray in Game', actionsArray)
    console.log('answer in Game', answer)

    const [right] = useSound(right_sound)
    const [wrong] = useSound(wrong_sound)

    const answerSound = () => inputAnswer === answer ? right() : wrong()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputAnswer(e.currentTarget.valueAsNumber)
    const handleBackToSettings = () => setIsStarted(false)
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setShowAnswer(true)
            setFocus(false)
            answerSound()
        }
    }
    const nextExercise = () => {
        makeActionsArrayAndAnswer()
        setRestart(!restart)
        setShowAnswer(false)
        setFocus(false)
    }

    return (
        <div className={s.game}>
            {!showAnswer
                ? <Actions actionsArray={actionsArray}
                           actionsCount={actionsCount}
                           numberComp={numberComp}
                           timeoutValue={timeoutValue}
                           setShowInput={setShowInput}
                           setFocus={setFocus}
                />
                : <Answer answer={answer} inputAnswer={inputAnswer}/>
            }
            {showInput &&
            <div className={s.answer_input}>
                <button onClick={handleBackToSettings}>Назад</button>
                {focus
                    ? <input
                        type="number"
                        value={inputAnswer}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        autoFocus={focus}
                        onKeyPress={handleEnterPress}
                    />
                    : <ButtonNext isOnFocus={!focus} callback={nextExercise}/>
                }

            </div>
            }
        </div>
    )
}

