import {AnswerItem} from './AnswerItem/AnswerItem'
import s from './RightAnswerCount.module.css'
import {ItemType} from '../../../store/homeWorkReducer'
import {FC} from 'react'

type RightAnswerPropsType = {
    tasks: ItemType[]
}

export const RightAnswerCount: FC<RightAnswerPropsType> = ({tasks}) => {
    const answerItemsArr = tasks.map((item, index) => <AnswerItem key={index} isDone={item.isDone}/>)

    return <div className={s.content}>
        {answerItemsArr}
    </div>
}


