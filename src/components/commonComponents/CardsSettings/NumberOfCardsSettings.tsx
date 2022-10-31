import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, useEffect, useState} from 'react'

type NumberOfCardsPropsType = {
    changeCardNumber: (value: number) => void
    numberOfFlashCards: number
}

export const NumberOfCardsSettings: FC<NumberOfCardsPropsType> = ({changeCardNumber, numberOfFlashCards}) => {

    const [currentValue, setCurrentValue] = useState(numberOfFlashCards)

    const onChangeCurrentCardsNumber = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value)
        setCurrentValue(value)
    }

    useEffect(() => {
        changeCardNumber(currentValue)
    }, [currentValue])


    return   <div className={s.settings_item}>
        <div>
            <input type="radio" id="1_card" name="cardsNumber" value="1"
                   checked={currentValue === 1}
                   onChange={onChangeCurrentCardsNumber}/>
            <label htmlFor="1_card">1-я карточка</label>
            <input type="radio" id="2_card" name="cardsNumber" value="2"
                   checked={currentValue === 2}
                   onChange={onChangeCurrentCardsNumber}/>
            <label htmlFor="2_card">2-я карточка</label>
        </div>
    </div>
}