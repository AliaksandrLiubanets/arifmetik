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

type AnswerInputProps = {
    inputAnswer: number
    setInputAnswer: (value: number) => void
    showAnswer: (isShowAnswer: boolean) => void
    showInput: (isShowInput: boolean) => void
    focusOnElement: (isFocus: boolean) => void
    rocketSound: () => void
    isFocus: boolean
}

export const AnswerInput: FC<AnswerInputProps> = memo(({
                                                           inputAnswer,
                                                           setInputAnswer,
                                                           showAnswer,
                                                           showInput,
                                                           focusOnElement,
                                                           rocketSound,
                                                           isFocus
                                                       }) => {

    const dispatch = useDispatch()
    const answer = useSelector((state: AppRootStateType) => state.count.answer)

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
    const setIsPrestart = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

    const nextExercise = useCallback(() => {
        showAnswer(false)
        showInput(false)
        focusOnElement(false)
        setInputAnswer(0)
        makeActionsArrayAndAnswer()
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