import {useDispatch, useSelector} from 'react-redux'
import React, {useCallback} from 'react'
import p from '../GameStyles/GameStyles.module.css'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import {FlashCardsContainer} from './FlashCardsContainer/FlashCardscontainer'
import {RightAnswerCount} from '../commonComponents/RightAnswerCount/RightAnswerCount'
import {AppRootStateType} from '../../store/store'
import {HomeWorkType, setStartHWDoing} from '../../store/homeWorkReducer'

export const FlashCardsBlock = () => {

    const dispatch = useDispatch()
    const {currentUserId, homeWork} = useSelector((state: AppRootStateType) => state.homework)
    const isStartHWDoing = useSelector((state: AppRootStateType) => state.homework.isStartHWDoing)
    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) =>  data.userId === currentUserId )
    }
    const tasks = homeWork[index].cards.tasks

    const stopHWDoing = useCallback(() => dispatch(setStartHWDoing({isStartHWDoing: false})), [dispatch])
    const handleBackToSettings = useCallback(() => {
        dispatch(startGame({isStarted: false}))
        stopHWDoing()
    }, [dispatch, stopHWDoing])


    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        {
            isStartHWDoing && <RightAnswerCount tasks={tasks}/>
        }
        <FlashCardsContainer/>
    </div>
}






