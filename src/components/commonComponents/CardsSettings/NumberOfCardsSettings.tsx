import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'

type NumberOfCardsPropsType = {
    changeCardNumber: (event: ChangeEvent<HTMLInputElement>) => void
}

export const NumberOfCardsSettings: FC<NumberOfCardsPropsType> = ({changeCardNumber}) => {

    const {numberOfFlashCards} = useSelector((state: AppRootStateType) => state.cards)

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