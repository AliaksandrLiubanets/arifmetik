import s from './Settings.module.css'
import React, {ChangeEvent} from 'react'
import {setNumberOfFlashCards} from '../../store/flashCardsGameReducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'

export const NumberOfCardsSettings = () => {

    const {numberOfFlashCards} = useSelector((state: AppRootStateType) => state.cards)

    const dispatch = useDispatch()

    const changeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfFlashCards({numberOfFlashCards: Number(event.target.value)}))
    }

    return   <div className={s.settings_item}>
        <div>
            <input type="radio" id="1_card" name="cardsNumber" value="1"
                   checked={numberOfFlashCards === 1}
                   onChange={changeCardNumber}/>
            <label htmlFor="1_card">1-я карточка</label>
            <input type="radio" id="2_card" name="cardsNumber" value="2"
                   checked={numberOfFlashCards === 2}
                   onChange={changeCardNumber}/>
            <label htmlFor="2_card">2-я карточка</label>
        </div>
    </div>
}