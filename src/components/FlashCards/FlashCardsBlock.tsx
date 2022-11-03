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

export const FlashCardsBlock = () => {

    const dispatch = useDispatch()
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])
    const isStartHWDoing = useSelector((state: AppRootStateType) => state.homework.isStartHWDoing)

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        {
            isStartHWDoing && <RightAnswerCount />
        }
        <FlashCardsContainer/>
    </div>
}






