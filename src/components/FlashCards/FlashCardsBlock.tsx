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

    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isShowInput, setIsShowInput] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const [isShowCards, setIsShowCards] = useState<boolean>(true)


    const dispatch = useDispatch()

    const nextFlashCard = () => dispatch(setCardAndAnswer())
    const {
        isSpeedOn,
        speed
    } = useSelector((state: AppRootStateType) => state.cards)


    const showInput = useCallback((isShowInput: boolean) => setIsShowInput(isShowInput), [])
    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

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
                    : <AnswerInput inputAnswer={inputAnswer}
                                   setInputAnswer={setInputAnswer}
                                   showInput={showInput}
                                   showAnswer={showAnswer}
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
            <RightAnswer/>
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

