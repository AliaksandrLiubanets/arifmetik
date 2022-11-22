import {useDispatch, useSelector} from 'react-redux'
import React, {useCallback} from 'react'
import p from '../GameStyles/GameStyles.module.css'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink, useLocation} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import {FlashCardsContainer} from './FlashCardsContainer/FlashCardscontainer'
import {RightAnswerCount} from '../commonComponents/RightAnswerCount/RightAnswerCount'
import {AppRootStateType} from '../../store/store'
import {HomeWorkType} from '../../store/homeWorkReducer'
import {FinishedHomework} from '../commonComponents/FinishedHomework/FinishedHomework'

export const FlashCardsBlock = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {currentUserId, homeWork} = useSelector((state: AppRootStateType) => state.homework)
    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    }
    const cards = homeWork[index].cards
    const tasks = cards.tasks
    const numberOfExercises = cards.numberOfExercises

    // find rightAnswerAmount with userId === currentUserId
    let rightAnswerAmount
    if(currentUserId === homeWork[index].userId) rightAnswerAmount = tasks.filter(task => task.isDone).length

    const handleBackToSettings = useCallback(() => {
        dispatch(startGame({isStarted: false}))
    }, [dispatch])

    const isShowAnswersCount = location.pathname.includes('homework')
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
        {!finishHW && <FlashCardsContainer />}
        {
            finishHW && <FinishedHomework text={text}/>
        }
    </div>
}






