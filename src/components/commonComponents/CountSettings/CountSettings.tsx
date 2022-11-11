import React, {ChangeEvent, FC, FocusEvent, useCallback} from 'react'
import s from '../../SettingsBlock/Settings.module.css'
import {NumberCompCountSettings} from './NumberCompCountSettings'
import {SpeedCountSettings} from './SpeedCountSettings'
import {NumberOfActionsCountSettings} from './NumberOfActionsCountSettings'
import {VoiceOnCountSettings} from './VoiceOnCountSettings'
import {NumberOfExercises} from '../CardsSettings/CardsSettings'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType, setCountNumberOfExercises} from '../../../store/homeWorkReducer'

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
    const dispatch = useDispatch()

    const {currentUserId, homeWork, isHWSettings} = useSelector((state: AppRootStateType) => state.homework)
    let index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    console.log('index before:', index)
    if(index === -1) index = 0
    console.log('index:', index)
    console.log('homeWork:', homeWork)
    const numberOfExercises = homeWork[index].count.numberOfExercises

    const onChangeNumberOfExercises = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountNumberOfExercises({numberOfExercises: e.currentTarget.valueAsNumber}))
    }, [dispatch])

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
        {
            isHWSettings && <NumberOfExercises numberOfExercises={numberOfExercises} onChangeNumberOfExercises={onChangeNumberOfExercises}
            />
        }
    </div>
}