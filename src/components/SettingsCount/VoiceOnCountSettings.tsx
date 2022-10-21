import React, {ChangeEvent, FC} from 'react'
import s from '../SettingsBlock/Settings.module.css'

type VoiceOnCountSettingsType = {
    isSoundOn: boolean
    onChangeSound: (e: ChangeEvent<HTMLInputElement>) => void
    isDisabledCheckboxSound: boolean
}

export const VoiceOnCountSettings: FC<VoiceOnCountSettingsType> = ({
                                                                       isSoundOn,
                                                                       onChangeSound,
                                                                       isDisabledCheckboxSound
                                                                   }) => {
    return <div className={s.settings_item}>
        <label>
            <input
                checked={isSoundOn}
                type="checkbox"
                onChange={onChangeSound}
                disabled={isDisabledCheckboxSound}
            />со звуком
        </label>
    </div>
}