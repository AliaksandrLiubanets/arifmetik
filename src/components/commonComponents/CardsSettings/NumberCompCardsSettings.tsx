import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent} from 'react'

type NumCompPropsType = {
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeFirstCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSecondCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
    firstCardsComposition: number
    secondCardsComposition: number
    numberOfFlashCards: number
    minValue: number
    maxValue: number
}

export const NumberCompCardsSettings: FC<NumCompPropsType> = ({
                                                                  handleFocus,
                                                                  onChangeFirstCardsComp,
                                                                  onChangeSecondCardsComp,
                                                                  firstCardsComposition,
                                                                  secondCardsComposition,
                                                                  numberOfFlashCards,
                                                                  minValue,
                                                                  maxValue
                                                              }) => {

    const inputSecondCardStyle = numberOfFlashCards !== 2 ? `${s.settings_comp_second_card}` : ''
    const isDisabledFirstInput = (firstCardsComposition <= minValue) || (firstCardsComposition >= maxValue)
    const isDisabledSecondInput = (secondCardsComposition <= minValue) || (secondCardsComposition >= maxValue) || numberOfFlashCards !== 2

    return <div className={s.settings_item}>
        <div>Состав числа:</div>
        <div className={s.settings_comp}>
            <div>
                <input
                    value={firstCardsComposition}
                    type="number"
                    onChange={onChangeFirstCardsComp}
                    onFocus={handleFocus}
                    disabled={isDisabledFirstInput}
                />
            </div>
            <div className={inputSecondCardStyle}>
                <input
                    disabled={isDisabledSecondInput}
                    value={secondCardsComposition}
                    type="number"
                    onChange={onChangeSecondCardsComp}
                    onFocus={handleFocus}
                />
            </div>
        </div>
    </div>
}