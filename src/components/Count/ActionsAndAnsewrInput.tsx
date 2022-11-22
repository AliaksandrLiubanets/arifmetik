import React, {FC, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink, useLocation} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import p from '../GameStyles/GameStyles.module.css'
import {AppRootStateType} from '../../store/store'
import {RightAnswerCount} from '../commonComponents/RightAnswerCount/RightAnswerCount'
import {HomeWorkType} from '../../store/homeWorkReducer'
import {FinishedHomework} from '../commonComponents/FinishedHomework/FinishedHomework'
import {CountContainer} from './CountContainer'


export const ActionsAndAnsewrInput: FC = () => {

    const location = useLocation()

    const dispatch = useDispatch()
    const {currentUserId, homeWork} = useSelector((state: AppRootStateType) => state.homework)
    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    }
    const count = homeWork[index].count
    const tasks = count.tasks
    const numberOfExercises = count.numberOfExercises

    const handleBackToSettings = useCallback(() => {
        dispatch(startGame({isStarted: false}))
    }, [dispatch])

    const isShowAnswersCount = location.pathname.includes('homework')

    // find rightAnswerAmount with userId === currentUserId
    let rightAnswerAmount
    if (currentUserId === homeWork[index].userId) rightAnswerAmount = tasks.filter(task => task.isDone).length

    const isHomeworkFinished = numberOfExercises === rightAnswerAmount
    const finishHW = isShowAnswersCount && isHomeworkFinished

    const text = 'Задание выполнено!'

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        {
            isShowAnswersCount && <RightAnswerCount tasks={tasks}/>
        }
        {
            finishHW
                ? <FinishedHomework text={text}/>
                : <CountContainer />
        }
    </div>
}



