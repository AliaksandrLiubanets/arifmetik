import {useDispatch, useSelector} from 'react-redux'
import {setCardAndAnswer} from '../../store/flashCardsGameReducer'
import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, memo, useCallback, useEffect, useState} from 'react'
import {AppRootStateType} from '../../store/store'
import s from './FlashCards.module.css'
import p from '../GameStyles/GameStyles.module.css'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'
import {startGame, switchPreStart} from '../../store/appReducer'
import {getPictureAccordingStrNumber} from '../../utils/getPictureAccordingStrNumber'
import {AllActions} from '../Answer/AllActions/AllActions'
import {ActionAndSoundType, setActionsArrayAndAnswer} from '../../store/countGameReducer'
import {AnswerInput} from '../Count/AnswerInput'
import useSound from 'use-sound'
import right_sound from '../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../assets/sounds/wrong_answer_sound.mp3'

export const FlashCardsBlock = () => {

    const dispatch = useDispatch()
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        <FlashCardsContainer/>
    </div>
}

export const FlashCardsContainer = () => {

    const dispatch = useDispatch()

    const nextFlashCard = () => dispatch(setCardAndAnswer())
    const {
        isSpeedOn,
        speed
    } = useSelector((state: AppRootStateType) => state.cards)

    const [isShowCards, setIsShowCards] = useState<boolean>(true)

    useEffect(() => {
        let id = setTimeout(() => {
            setIsShowCards(false)
        }, 1000 * speed)
        return () => {
            clearInterval(id)
        }
    }, [])

    return <>
        {isSpeedOn
            ? <>
                {isShowCards
                    ? <FlashCards/>
                    : <CardAnswerInput inputAnswer={inputAnswer}
                                   setInputAnswer={setInputAnswer}
                                   showInput={showInput}
                                   showAnswer={showAnswer}
                                   rocketSound={rocketSound}
                                   isFocus={isFocus}
                                   focusOnElement={focusOnElement}
                    />
                }
            </>
            : <>
                <FlashCards/>
                <ButtonNext isOnFocus={true} callback={nextFlashCard}/>
            </>
        }
    </>
}

export const FlashCards = () => {
    const {
        firstFlashCard,
        secondFlashCard,
        numberOfFlashCards
    } = useSelector((state: AppRootStateType) => state.cards)
    let card: string = getPictureAccordingStrNumber(firstFlashCard)
    let secondCard: string = getPictureAccordingStrNumber(secondFlashCard)

    return <div className={s.flash}>

        <div className={s.card}><img src={card} alt={'card'}/></div>
        {
            numberOfFlashCards === 2 &&
            <div className={s.card}><img src={secondCard} alt={'card'}/></div>
        }
    </div>
}

type AnswerCardProps = {
    answer: number
    inputAnswer: number
}

export const AnswerCard: FC<AnswerCardProps> = memo(({answer, inputAnswer}) => {

        const answerStyle = `${s.answer} ${inputAnswer !== answer ? s.wrong : ''}`

        return <>
            <div className={answerStyle}>{inputAnswer}</div>
            <RightAnswer />
        </>
    }
)

export const RightAnswer = () => {

        const {firstFlashCard, secondFlashCard, answer} = useSelector((state: AppRootStateType) => state.cards)
        const allExerciseStr: string = `${firstFlashCard.toString()} + ${secondFlashCard.toString()} = ${answer}`

        return <div className={s.container}>
            <div className={s.allExercise}>
                {allExerciseStr}
            </div>
        </div>

}

type CardAnswerInputProps = {
    inputAnswer: number
    setInputAnswer: (value: number) => void
    showAnswer: (isShowAnswer: boolean) => void
    showInput: (isShowInput: boolean) => void
    focusOnElement: (isFocus: boolean) => void
    rocketSound: () => void
    isFocus: boolean
}

export const CardAnswerInput: FC<CardAnswerInputProps> = memo(({
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