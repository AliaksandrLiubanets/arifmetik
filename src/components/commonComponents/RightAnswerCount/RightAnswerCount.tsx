import {AnswerItem} from './AnswerItem/AnswerItem'
import s from './RightAnswerCount.module.css'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType} from '../../../store/homeWorkReducer'

export const RightAnswerCount = () => {

    const {currentUserId, homeWork} = useSelector((state: AppRootStateType) => state.homework)
    const index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    const tasks = homeWork[index].cards.tasks

    const answerItemsArr = tasks.map((item, index) => <AnswerItem key={index} isDone={item.isDone}/>)

    return <div className={s.content}>
        {answerItemsArr}
    </div>
}


