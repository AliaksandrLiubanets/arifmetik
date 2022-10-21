import s from './Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'

type NumCompPropsType = {
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeFirstCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSecondCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
}

export const NumberCompositionSettings: FC<NumCompPropsType> = ({handleFocus, onChangeFirstCardsComp, onChangeSecondCardsComp}) => {

    const {
        firstCardsComposition,
        secondCardsComposition,
        numberOfFlashCards
    } = useSelector((state: AppRootStateType) => state.cards)

    const inputSecondCardStyle = numberOfFlashCards !== 2 ? `${s.settings_comp_second_card}` : ''

    return <div className={s.settings_item}>
        <div>Состав числа:</div>
        <div className={s.settings_comp}>
            <div>
                <input
                    value={firstCardsComposition}
                    type="number"
                    onChange={onChangeFirstCardsComp}
                    onFocus={handleFocus}
                />
            </div>
            <div className={inputSecondCardStyle}>
                <input
                    disabled={numberOfFlashCards !== 2}
                    value={secondCardsComposition}
                    type="number"
                    onChange={onChangeSecondCardsComp}
                    onFocus={handleFocus}
                />
            </div>
        </div>
    </div>
}