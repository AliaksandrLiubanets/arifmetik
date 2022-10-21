import React, {ChangeEvent, FC, FocusEvent} from 'react'
import s from '../../SettingsBlock/Settings.module.css'

type NumberOfActionsCountSettingsType = {
    actionsCount: number
    onChangeActionsCount: (e: ChangeEvent<HTMLInputElement>) => void
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
}

export const NumberOfActionsCountSettings: FC<NumberOfActionsCountSettingsType> = ({
                                                                                       actionsCount,
                                                                                       onChangeActionsCount,
                                                                                       handleFocus
                                                                                   }) => {
    return <div className={s.settings_item}>
        <div>Количество действий:</div>
        <input
            value={actionsCount}
            type="number"
            onChange={onChangeActionsCount}
            onFocus={handleFocus}
        />
    </div>
}