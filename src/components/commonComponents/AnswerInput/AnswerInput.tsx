import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, memo, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import useSound from 'use-sound'
import right_sund from '../../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../../assets/sounds/wrong_answer_sound.mp3'
import s from '../../GameStyles/GameStyles.module.css'
import rocket_start from '../../../assets/sounds/rocket/rocket_2sec.mp3'
import {switchPreStart} from '../../../store/appReducer'
import {AppRootStateType} from '../../../store/store'
import {makeAnswerFromFlashCardOrCount} from '../../../utils/helper'
import {setCardAndAnswer} from '../../../store/flashCardsGameReducer'
import {ButtonNext} from '../../ButtonNext/ButtonNext'
import {setActionsArrayAndAnswer} from '../../../store/countGameReducer'
import {AnswerCard} from '../../FlashCards/AnswerCard/AnswerCard'
import {addRightAnswerToCardsTasksAmount} from '../../../store/homeWorkReducer'

type AnswerInputProps = {
    inputAnswer: number
    setInputAnswer: (value: number) => void
    showAnswer: (isShowAnswer: boolean) => void
    focusOnElement: (isFocus: boolean) => void
    isFocus: boolean
}

export const AnswerInput: FC<AnswerInputProps> = memo(({
                                                           inputAnswer,
                                                           setInputAnswer,
                                                           showAnswer,
                                                           focusOnElement,
                                                           isFocus
                                                       }) => {

    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    const dispatch = useDispatch()

    const countAnswer = useSelector((state: AppRootStateType) => state.count.answer)
    const flashCardAnswer = useSelector((state: AppRootStateType) => state.cards.answerCards)
    const isSpeedOn = useSelector((state: AppRootStateType) => state.cards.isSpeedOn)
    const typeOfGame = useSelector((state: AppRootStateType) => state.app.typeOfGame)

    const answer = makeAnswerFromFlashCardOrCount(typeOfGame, countAnswer, flashCardAnswer)

    const [right] = useSound(right_sund)
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
    const nextStep = useCallback(() => {
        if (typeOfGame === '/count') {
            makeActionsArrayAndAnswer()
        } else {
            nextFlashCard()
        }
    }, [typeOfGame, makeActionsArrayAndAnswer, nextFlashCard])
    const setIsPrestart = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

    const nextExercise = useCallback(() => {
        if(!isSpeedOn) {
            rocketSound()
            setIsPrestart(true)
        }
        showAnswer(false)
        focusOnElement(false)
        setInputAnswer(0)
        nextStep()
    }, [setIsPrestart, rocketSound, isSpeedOn, showAnswer, focusOnElement, setInputAnswer, nextStep])



    useEffect(() => {
        if (answer === inputAnswer) {
            dispatch(addRightAnswerToCardsTasksAmount())
        }
    }, [inputAnswer, answer, dispatch])

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
                {/*{typeOfGame === '/count' && <AnswerCount answer={answer} inputAnswer={inputAnswer}/>}*/}
                <ButtonNext isOnFocus={!isFocus} callback={nextExercise}/>
            </div>
        }
    </div>
})

