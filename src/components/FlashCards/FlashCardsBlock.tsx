import {useDispatch, useSelector} from 'react-redux'
import {setCardAndAnswer} from '../../store/flashCardsGameReducer'
import React, {FC, memo, useCallback, useEffect, useState} from 'react'
import {AppRootStateType} from '../../store/store'
import s from './FlashCards.module.css'
import p from '../GameStyles/GameStyles.module.css'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import {getPictureAccordingStrNumber} from '../../utils/getPictureAccordingStrNumber'
import {AnswerInput} from '../Count/AnswerInput'
import {makeAnswerFromFlashCardOrCount} from '../../utils/helper'

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
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const dispatch = useDispatch()
    const {
        isSpeedOn,
        answer
    } = useSelector((state: AppRootStateType) => state.cards)
    const countAnswer = useSelector((state: AppRootStateType) => state.count.answer)
    const typeOfGame = useSelector((state: AppRootStateType) => state.app.typeOfGame)

    const answerExercise = makeAnswerFromFlashCardOrCount(typeOfGame, countAnswer, answer)

    const nextFlashCard = () => dispatch(setCardAndAnswer())

    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

    return <>
        {isSpeedOn
            ? <>
                {!isShowAnswer
                    ? <FlashCards focusOnElement={focusOnElement} showAnswer={showAnswer}/>
                    : <AnswerInput inputAnswer={inputAnswer}
                                   setInputAnswer={setInputAnswer}
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
type Props = {
    focusOnElement?: (focus: boolean) => void
    showAnswer?: (isShowAnswer: boolean) => void
}

export const FlashCards: FC<Props> = ({focusOnElement, showAnswer}) => {

    const {
        firstFlashCard,
        secondFlashCard,
        numberOfFlashCards,
        speed
    } = useSelector((state: AppRootStateType) => state.cards)
    let card: string = getPictureAccordingStrNumber(firstFlashCard)
    let secondCard: string = getPictureAccordingStrNumber(secondFlashCard)

    useEffect(() => {
        showAnswer && showAnswer(false)
        let id: ReturnType<typeof setTimeout>
        id = setTimeout(() => {
            showAnswer && showAnswer(true)
            focusOnElement && focusOnElement(true)
        }, 1000 * speed)

        return () => {
            clearInterval(id)
        }

    }, [speed])


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
        const wrongAnswerStyle = {
            // 'textAlign': 'center',
            'fontSize': '50px',
            'fontWeight': '600',
            'color': 'white',
            'backgroundColor': 'red',
            'width': '165px',

        }

        const RightAnswerStyle = {
            ...wrongAnswerStyle,
            'backgroundColor': 'green',
        }
        const answerStyle = answer !== inputAnswer ? wrongAnswerStyle : RightAnswerStyle

        return <>
            <div style={answerStyle}>{inputAnswer}</div>
            <RightAnswer/>
        </>
    }
)

export const RightAnswer = () => {

    const {answer} = useSelector((state: AppRootStateType) => state.cards)
    // const allExerciseStr: string = `${firstFlashCard.toString()} + ${secondFlashCard.toString()} = ${answer}`
    // const allExerciseStr: string = `${answer}`

    return <div className={s.container}>
        <FlashCards/>
    </div>
}

