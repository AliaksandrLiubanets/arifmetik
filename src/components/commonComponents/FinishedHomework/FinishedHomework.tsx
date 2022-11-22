import finish from '../../../assets/images/finish_smile.jpg'
import s from './FinishedHomework.module.css'
import {FC} from 'react'

type FinishedHomeworkPropsType = {
    text: string
}

export const FinishedHomework: FC<FinishedHomeworkPropsType> = ({text}) => {
    return <div className={s.container}>
        <div>{text}</div>
        <img src={finish} alt={'smile'}/>
    </div>
}