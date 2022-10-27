import React, {ChangeEvent, FC} from 'react'
import s from '../../SettingsBlock/Settings.module.css'

type VoiceOnCountSettingsType = {
    isVoiceOn: boolean
    onChangeVoice: (e: ChangeEvent<HTMLInputElement>) => void
    isDisabledCheckboxSound: boolean
}

export const VoiceOnCountSettings: FC<VoiceOnCountSettingsType> = ({
                                                                       isVoiceOn,
                                                                       onChangeVoice,
                                                                       isDisabledCheckboxSound
                                                                   }) => {
    return <div className={s.settings_item}>
        <label>
            <input
                checked={isVoiceOn}
                type="checkbox"
                onChange={onChangeVoice}
                disabled={isDisabledCheckboxSound}
            />со звуком
        </label>
    </div>
}