import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent, useEffect, useState} from 'react'

type NumCompPropsType = {
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeFirstCardsComp: (value: number) => void
    onChangeSecondCardsComp: (value: number) => void
    firstCardsComposition: number
    secondCardsComposition: number
    numberOfFlashCards: number
    minFirstValue: number
    maxFirstValue: number
    minSecondValue: number
    maxSecondValue: number
}

export const NumberCompCardsSettings: FC<NumCompPropsType> = ({
                                                                  handleFocus,
                                                                  onChangeFirstCardsComp,
                                                                  onChangeSecondCardsComp,
                                                                  firstCardsComposition,
                                                                  secondCardsComposition,
                                                                  numberOfFlashCards,
                                                                  minFirstValue,
                                                                  maxFirstValue,
                                                                  minSecondValue,
                                                                  maxSecondValue
                                                              }) => {

    const inputSecondCardStyle = numberOfFlashCards !== 2 ? `${s.settings_comp_second_card}` : ''

    const [firstCurrentValue, setFirstCurrentValue] = useState(minFirstValue)
    const [secondCurrentValue, setSecondCurrentValue] = useState(minSecondValue)

    const onChangeFirstCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        if (value <= maxFirstValue && value >= minFirstValue) {
            setFirstCurrentValue(value)
        }
    }
    const onChangeSecondCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        if (value <= maxSecondValue && value >= minSecondValue) {
            setSecondCurrentValue(value)
        }
    }

    useEffect(() => {
        onChangeFirstCardsComp(firstCurrentValue)
    }, [firstCurrentValue])

    useEffect(() => {
        onChangeSecondCardsComp(secondCurrentValue)
    }, [secondCurrentValue])


    return <div className={s.settings_item}>
        <div>Состав числа:</div>
        <div className={s.settings_comp}>
            <div>
                <input
                    value={firstCurrentValue}
                    type="number"
                    onChange={onChangeFirstCurrentValue}
                    onFocus={handleFocus}
                    disabled={false}
                    step={'1'}
                />
            </div>
            <div className={inputSecondCardStyle}>
                <input
                    disabled={false}
                    value={secondCurrentValue}
                    type="number"
                    onChange={onChangeSecondCurrentValue}
                    onFocus={handleFocus}
                    step={'1'}
                />
            </div>
        </div>
    </div>
}