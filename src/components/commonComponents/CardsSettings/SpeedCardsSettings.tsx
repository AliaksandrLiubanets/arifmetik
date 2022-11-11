import s from '../../SettingsBlock/Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent} from 'react'

type SpeedCardsSettingsPropsType = {
    isSpeedOn: boolean
    speedCards: number
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
                                                                    }) => {

    const inputSpeedStyle = !isSpeedOn ? `${s.settings_comp_second_card}` : ''

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
                    step={'0.1'}
                    onChange={onChangeTimeOutValue}
                    onFocus={handleFocus}
                />
            </div>
        </div>
    </div>
}


