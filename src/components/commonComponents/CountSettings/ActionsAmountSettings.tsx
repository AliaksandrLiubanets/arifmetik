import React, {ChangeEvent, FC, FocusEvent} from 'react'
import s from '../../SettingsBlock/Settings.module.css'

type ActionsAmountSettingsSettingsType = {
    actionsAmount: number
    onChangeActionsCount: (e: ChangeEvent<HTMLInputElement>) => void
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
}

export const ActionsAmountSettings: FC<ActionsAmountSettingsSettingsType> = ({
                                                                                       actionsAmount,
                                                                                       onChangeActionsCount,
                                                                                       handleFocus
                                                                                   }) => {
    return <div className={s.settings_item}>
        <div>Количество действий:</div>
        <input
            value={actionsAmount}
            type="number"
            onChange={onChangeActionsCount}
            onFocus={handleFocus}
        />
    </div>
}