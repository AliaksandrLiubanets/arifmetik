import React, {ChangeEvent, FC, FocusEvent} from 'react'
import s from '../../SettingsBlock/Settings.module.css'

type SpeedCountSettingsType = {
    speed: number
    onChangeTimeOutValue: (e: ChangeEvent<HTMLInputElement>) => void
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
}

export const SpeedCountSettings: FC<SpeedCountSettingsType> = ({speed, onChangeTimeOutValue, handleFocus}) => {
    return <div className={s.settings_item}>
        <div>Скорость:</div>
        <input
            value={speed}
            type="number"
            onChange={onChangeTimeOutValue}
            onFocus={handleFocus}
            step={'0.1'}
        />
    </div>
}