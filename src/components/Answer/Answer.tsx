import React, {FC} from 'react'
import s from './Answer.module.css'

type Props = {
    answer: number
    inputAnswer: number
}

export const Answer: FC<Props> = ({answer, inputAnswer}) => {

    const answerStyle = `${s.answer} ${inputAnswer !== answer ? s.wrong : ''}`

    return <>
        <div className={answerStyle}>{answer}</div>
    </>
}