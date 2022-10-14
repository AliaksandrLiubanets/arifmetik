import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, memo, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import useSound from 'use-sound'
import right_sound from '../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../assets/sounds/wrong_answer_sound.mp3'
import {setActionsArrayAndAnswer} from '../../store/countGameReducer'
import {switchPreStart} from '../../store/appReducer'
import s from './Game.module.css'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import {setCardAndAnswer} from '../../store/flashCardsGameReducer'
import rocket_start from '../../assets/sounds/rocket/rocket_2sec.mp3'
import {AnswerCard} from '../FlashCards/FlashCardsBlock'
import {AnswerCount} from '../Answer/AnswerCount'
import {makeAnswerFromFlashCardOrCount} from '../../utils/helper'

type AnswerInputProps = {
    inputAnswer: number
    setInputAnswer: (value: number) => void
    showAnswer: (isShowAnswer: boolean) => void
    // showInput: (isShowInput: boolean) => void
    focusOnElement: (isFocus: boolean) => void
    isFocus: boolean
}

export const AnswerInput: FC<AnswerInputProps> = memo(({
                                                           inputAnswer,
                                                           setInputAnswer,
                                                           showAnswer,
                                                           // showInput,
                                                           focusOnElement,
                                                           isFocus
                                                       }) => {

    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    const dispatch = useDispatch()

    const countAnswer = useSelector((state: AppRootStateType) => state.count.answer)
    const flashCardAnswer = useSelector((state: AppRootStateType) => state.cards.answer)
    const typeOfGame = useSelector((state: AppRootStateType) => state.app.typeOfGame)

    const answer = makeAnswerFromFlashCardOrCount(typeOfGame, countAnswer, flashCardAnswer)

    const [right] = useSound(right_sound)
    const [wrong] = useSound(wrong_sound)

    const answerSound = () => inputAnswer === answer ? right() : wrong()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputAnswer(e.currentTarget.valueAsNumber)
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            showAnswer(true)
            focusOnElement(false)
            answerSound()
        }
    }
    const makeActionsArrayAndAnswer = useCallback(() => dispatch(setActionsArrayAndAnswer()), [dispatch])
    const nextFlashCard = useCallback(() => dispatch(setCardAndAnswer()), [dispatch])
    const nextStep = () => {
        if (typeOfGame === '/count') {
            makeActionsArrayAndAnswer()
        } else {
            nextFlashCard()
        }
    }
    const setIsPrestart = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

    const nextExercise = useCallback(() => {
        showAnswer(false)
        // showInput(false)
        focusOnElement(false)
        setInputAnswer(0)
        nextStep()
        setIsPrestart(true)
    }, [makeActionsArrayAndAnswer, setIsPrestart, rocketSound, showAnswer, focusOnElement, setInputAnswer])

    return <div className={s.answer_input}>
        {isFocus
            ? <input
                type="number"
                value={inputAnswer}
                onChange={handleChange}
                onFocus={handleFocus}
                autoFocus={isFocus}
                onKeyPress={handleEnterPress}
            />
            : <div className={s.answer_card}>
                {typeOfGame === '/flash' && <AnswerCard answer={answer} inputAnswer={inputAnswer}/>}
                {typeOfGame === '/count' && <AnswerCount answer={answer} inputAnswer={inputAnswer}/>}
                <ButtonNext isOnFocus={!isFocus} callback={nextExercise}/>
            </div>
        }
    </div>
})