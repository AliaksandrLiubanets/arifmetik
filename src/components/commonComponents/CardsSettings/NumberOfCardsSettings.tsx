import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC} from 'react'

type NumberOfCardsPropsType = {
    changeCardNumber: (event: ChangeEvent<HTMLInputElement>) => void
    numberOfFlashCards: number
}

export const NumberOfCardsSettings: FC<NumberOfCardsPropsType> = ({changeCardNumber, numberOfFlashCards}) => {

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