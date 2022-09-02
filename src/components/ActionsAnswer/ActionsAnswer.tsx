import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, useCallback, useState} from 'react'
import useSound from 'use-sound'
import right_sound from '../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../assets/sounds/wrong_answer_sound.mp3'
import {Actions} from '../Actions/Actions'
import {Answer} from '../Answer/Answer'
import s from '../Game/Game.module.css'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'

type PropsActionsAnswer = {
    // numberComp: number
    // timeoutValue: number
    // actionsCount: number
    makeActionsArrayAndAnswer: () => void
    // actionsArray: string[]
    // answer: number
    // isSoundOn: boolean
    setIsPrestart: (isPreStart: boolean) => void
    startGame: (isStarted: boolean) => void
    rocketSound: () => void
}

export const ActionsAnswer: FC<PropsActionsAnswer> = ({
                                                          // numberComp,
                                                          // timeoutValue,
                                                          // actionsCount,
                                                          // actionsArray,
                                                          // answer,
                                                          // isSoundOn,
                                                          makeActionsArrayAndAnswer,
                                                          setIsPrestart,
                                                          startGame,
                                                          rocketSound
                                                      }) => {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isShowInput, setIsShowInput] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const [right] = useSound(right_sound)
    const [wrong] = useSound(wrong_sound)

    const dispatch = useDispatch()

    const {numberComposition, speed, actionsCount, actionsArray, answer, isSoundOn} = useSelector((state: AppRootStateType) => state.count)

    const answerSound = () => inputAnswer === answer ? right() : wrong()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputAnswer(e.currentTarget.valueAsNumber)
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
         (true)
        rocketSound()
    }, [makeActionsArrayAndAnswer, setIsPrestart, rocketSound])

    const showInput = useCallback((isShowInput: boolean) => setIsShowInput(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

    const handleBackToSettings = useCallback(() => startGame(false), [])

    return <>
        <button onClick={handleBackToSettings}>Назад</button>
        {!isShowAnswer
            ? <Actions actionsArray={actionsArray}
                       actionsCount={actionsCount}
                       numberComp={numberComposition}
                       timeoutValue={speed}
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