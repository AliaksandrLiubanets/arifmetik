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
import {useLocation} from 'react-router-dom'
import {setCardAndAnswer} from '../../store/flashCardsGameReducer'
import rocket_start from '../../assets/sounds/rocket/rocket_2sec.mp3'

type AnswerInputProps = {
    inputAnswer: number
    setInputAnswer: (value: number) => void
    showAnswer: (isShowAnswer: boolean) => void
    showInput: (isShowInput: boolean) => void
    focusOnElement: (isFocus: boolean) => void
    isFocus: boolean
}

export const AnswerInput: FC<AnswerInputProps> = memo(({
                                                           inputAnswer,
                                                           setInputAnswer,
                                                           showAnswer,
                                                           showInput,
                                                           focusOnElement,
                                                           isFocus,
                                                       }) => {

    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    const location = useLocation()
    const pathName = location.pathname

    const dispatch = useDispatch()
    let answer: number
    const answerCount = useSelector((state: AppRootStateType) => state.count.answer)
    const answerFlashCard = useSelector((state: AppRootStateType) => state.cards.answer)

    if (pathName === '/count') {
        answer = answerCount
    } else if (pathName === '/cards') {
        answer = answerFlashCard
    }

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
        if (pathName === '/count') {
            makeActionsArrayAndAnswer()
        } else if (pathName === '/cards') {
            nextFlashCard()
        }
    }
    const setIsPrestart = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

    const nextExercise = useCallback(() => {
        showAnswer(false)
        showInput(false)
        focusOnElement(false)
        setInputAnswer(0)
        nextStep()
        setIsPrestart(true)
        rocketSound()
    }, [makeActionsArrayAndAnswer, setIsPrestart, rocketSound, showAnswer, showInput, focusOnElement, setInputAnswer])

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
            : <ButtonNext isOnFocus={!isFocus} callback={nextExercise}/>
        }
    </div>
})