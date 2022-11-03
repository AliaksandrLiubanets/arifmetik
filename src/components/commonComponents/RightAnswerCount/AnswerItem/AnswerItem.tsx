import {FC} from 'react'
import s from './AnswerItem.module.css'

type AnswerItemPropsType = {
    isDone: boolean
}

export const AnswerItem:FC<AnswerItemPropsType> = ({isDone}) => {

    const itemStyle = `${s.item} ${isDone ? s.filled : ''}`

    return <div className={s.item_block}>
        <div className={s.line}></div>
        <div className={itemStyle}></div>
        <div className={s.line}></div>
    </div>
}