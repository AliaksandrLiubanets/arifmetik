import React, {FC, memo} from 'react'
import s from './Answer.module.css'
import {AllActions} from './AllActions/AllActions'

type Props = {
    answer: number
    inputAnswer: number
}

export const AnswerCount: FC<Props> = memo(({answer, inputAnswer}) => {
        const answerStyle = `${s.answer} ${inputAnswer !== answer ? s.wrong : ''}`

        return <>
                    <div className={answerStyle}>{inputAnswer}</div>
                    <AllActions/>
                </>
    }
)
