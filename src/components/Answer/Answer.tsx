import React, {FC} from 'react'
import s from './Answer.module.css'

type Props = {
    answer: number
    inputAnswer: number
}

export const Answer: FC<Props> = ({answer, inputAnswer}) => {



    const answerStyle = `${s.answer} ${inputAnswer !== answer ? s.wrong : ''}`

    // const [right] = useSound(right_sound)
    // const [wrong] = useSound(wrong_sound)
    //
    // const sound = inputAnswer === answer ? right() : wrong()
    //
    // useEffect(() => {
    //     if(inputAnswer === answer) {
    //         console.log('right')
    //         right()
    //     } else {
    //         console.log('wrong')
    //         wrong()
    //     }
    // }, [inputAnswer])

    return <>
        <div className={answerStyle}>{answer}</div>
    </>
}