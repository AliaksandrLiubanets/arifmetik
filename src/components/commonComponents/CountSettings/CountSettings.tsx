import React, {ChangeEvent, FC, FocusEvent} from 'react'
import s from '../../SettingsBlock/Settings.module.css'
import {NumberCompCountSettings} from './NumberCompCountSettings'
import {SpeedCountSettings} from './SpeedCountSettings'
import {NumberOfActionsCountSettings} from './NumberOfActionsCountSettings'
import {VoiceOnCountSettings} from './VoiceOnCountSettings'

type SettingsCountPropsType = {
    numberComposition: number
    speed: number
    actionsCount: number
    isVoiceOn: boolean
    isDisabledCheckboxVoice: boolean
    onChangeNumberComp: (e: ChangeEvent<HTMLInputElement>) => void
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeTimeOutValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeActionsCount: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeVoice: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CountSettings: FC<SettingsCountPropsType> = ({
                                                              numberComposition,
                                                              speed,
                                                              actionsCount,
                                                              isVoiceOn,
                                                              isDisabledCheckboxVoice,
                                                              onChangeNumberComp,
                                                              handleFocus,
                                                              onChangeTimeOutValue,
                                                              onChangeActionsCount,
                                                              onChangeVoice,
                                                          }) => {
    return <div className={s.settings_frame}>
        <div className={s.settings_name}>Счёт</div>
        <NumberCompCountSettings onChangeNumberComp={onChangeNumberComp}
                                 handleFocus={handleFocus}
                                 numberComposition={numberComposition}/>
        <SpeedCountSettings speed={speed}
                            handleFocus={handleFocus}
                            onChangeTimeOutValue={onChangeTimeOutValue}/>
        <NumberOfActionsCountSettings actionsCount={actionsCount}
                                      onChangeActionsCount={onChangeActionsCount}
                                      handleFocus={handleFocus}/>
        <VoiceOnCountSettings isVoiceOn={isVoiceOn}
                              isDisabledCheckboxSound={isDisabledCheckboxVoice}
                              onChangeVoice={onChangeVoice}/>
    </div>
}