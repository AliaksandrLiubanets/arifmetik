import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent, useEffect, useState} from 'react'

type SpeedCardsSettingsPropsType = {
    isSpeedOn: boolean
    minValue: number
    maxValue: number
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeTimeOutValue: (value: number) => void
    onChangeIsSpeedOn: (value: boolean) => void

}

export const SpeedCardsSettings: FC<SpeedCardsSettingsPropsType> = ({
                                                                        isSpeedOn,
                                                                        handleFocus,
                                                                        onChangeTimeOutValue,
                                                                        onChangeIsSpeedOn,
                                                                        minValue,
                                                                        maxValue,
                                                                    }) => {



    const [currentValue, setCurrentValue] = useState(maxValue)
    const [currenIsSpeedOn, setCurrentisSpeedOn] = useState(isSpeedOn)

    const onChangeCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        if (value <= maxValue && value >= minValue) {
            setCurrentValue(value)
        }
    }
    const onChangeCurrentIsSpeedOn = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.checked
        if (!isSpeedOn) {
            setCurrentisSpeedOn(value)
        }
    }

    useEffect(() => {
        onChangeTimeOutValue(currentValue)
    }, [currentValue])

    useEffect(() => {
        onChangeIsSpeedOn(currenIsSpeedOn)
    }, [currenIsSpeedOn])

    const inputSpeedStyle = !currenIsSpeedOn ? `${s.settings_comp_second_card}` : ''

    return <div className={s.settings_item}>
        <div className={s.settings_wrapper}>
            <div className={s.settings_speed}>
                <div>На скорость</div>
                <input type="checkbox" id="sdeedOn" name="sdeedOn" checked={currenIsSpeedOn}
                       onChange={onChangeCurrentIsSpeedOn}
                />
            </div>
            <div className={s.settings_speed}>
                <div>Скорость:</div>
                <input
                    className={inputSpeedStyle}
                    disabled={!currenIsSpeedOn}
                    value={currentValue}
                    type="number"
                    onChange={onChangeCurrentValue}
                    onFocus={handleFocus}
                    step={'0.1'}
                />
            </div>
        </div>
    </div>
}
