import React, {FC, memo} from 'react'
import s from './AnswerCard.module.css'
import {FlashCards} from '../FlashCardsComponent/FlashCards'

type AnswerCardProps = {
    answer: number
    inputAnswer: number
}

export const AnswerCard: FC<AnswerCardProps> = memo(({answer, inputAnswer}) => {

        const answerStyle = answer !== inputAnswer ? `${s.wrong}` : ''

        return <>
            <div className={`${s.right} ${answerStyle}`}>{inputAnswer}</div>
            <RightAnswer/>
        </>
    }
)

export const RightAnswer = () => {

    // const allExerciseStr: string = `${firstFlashCard.toString()} + ${secondFlashCard.toString()} = ${answer}`

    return <div className={s.container}>
        <FlashCards/>
    </div>
}