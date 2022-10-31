import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent, useCallback, useEffect, useState} from 'react'

type SpeedCardsSettingsPropsType = {
    isSpeedOn: boolean
    speedCards: number
    // minValue: number
    // maxValue: number
    // stepValue: number
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeTimeOutValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeIsSpeedOn: (e: ChangeEvent<HTMLInputElement>) => void

}

export const SpeedCardsSettings: FC<SpeedCardsSettingsPropsType> = ({
                                                                        isSpeedOn,
                                                                        speedCards,
                                                                        handleFocus,
                                                                        onChangeTimeOutValue,
                                                                        onChangeIsSpeedOn,
                                                                        // minValue,
                                                                        // maxValue,
                                                                        // stepValue
                                                                    }) => {

    const inputSpeedStyle = !isSpeedOn ? `${s.settings_comp_second_card}` : ''
    //
    // const [currentValue, setCurrentValue] = useState(maxValue)
    //
    // const onChangeCurrentValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     let value = e.currentTarget.valueAsNumber
    //     if (value <= maxValue && value >= minValue) {
    //         setCurrentValue(value)
    //     }
    // }
    //
    // useEffect(() => {
    //     onChangeTimeOutValue(currentValue)
    // }, [currentValue])

    return <div className={s.settings_item}>
        <div className={s.settings_wrapper}>
            <div className={s.settings_speed}>
                <div>На скорость</div>
                <input type="checkbox" id="sdeedOn" name="sdeedOn" checked={isSpeedOn}
                       onChange={onChangeIsSpeedOn}
                />
            </div>
            <div className={s.settings_speed}>
                <div>Скорость:</div>
                <input
                    className={inputSpeedStyle}
                    disabled={!isSpeedOn}
                    value={speedCards}
                    type="number"
                    onChange={onChangeTimeOutValue}
                    onFocus={handleFocus}
                    // step={stepValue}
                    // min={minValue}
                    // max={maxValue}
                />
            </div>
        </div>
    </div>
}


