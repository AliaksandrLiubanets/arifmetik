import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent} from 'react'

type NumCompPropsType = {
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeFirstCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSecondCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
    firstCardsComposition: number
    secondCardsComposition: number
    numberOfFlashCards: number
}

export const NumberCompCardsSettings: FC<NumCompPropsType> = ({
                                                                  handleFocus,
                                                                  onChangeFirstCardsComp,
                                                                  onChangeSecondCardsComp,
                                                                  firstCardsComposition,
                                                                  secondCardsComposition,
                                                                  numberOfFlashCards,
                                                              }) => {

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