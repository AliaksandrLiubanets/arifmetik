import {useDispatch, useSelector} from 'react-redux'
import {setCard} from '../../store/flashCardsGameReducer'
import React, {useCallback} from 'react'
import {AppRootStateType} from '../../store/store'
import s from './FlashCards.module.css'
import p from '../GameStyles/GameStyles.module.css'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import {getPictureAccordingStrNumber} from '../../utils/getPictureAccordingStrNumber'

export const FlashCards = () => {

    const dispatch = useDispatch()
    const nextFlashCard = () => dispatch(setCard())
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

    const {firstFlashCard, secondFlashCard, numberOfFlashCards} = useSelector((state: AppRootStateType) => state.cards)

    let card: string = getPictureAccordingStrNumber(firstFlashCard)
    let secondCard: string = getPictureAccordingStrNumber(secondFlashCard)

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        <div className={s.flash}>
            <div className={s.card}><img src={card} alt={'card'}/></div>
            {
                numberOfFlashCards === 2 &&
                <div className={s.card}><img src={secondCard} alt={'card'}/></div>
            }
        </div>
        <ButtonNext isOnFocus={true} callback={nextFlashCard}/>
    </div>
}