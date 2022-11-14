import React, {ChangeEvent, FC, FocusEvent, memo, useCallback, useEffect, useState} from 'react'
import s from '../SettingsBlock/Settings.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {
    setActionsArrayAndAnswer,
    setActionsCount,
    setNumberComp,
    setSpeed,
    switchSound
} from '../../store/countGameReducer'
import {changeGame, startGame, switchPreStart} from '../../store/appReducer'
import useSound from 'use-sound'
import rocket_start from '../../assets/sounds/rocket/rocket_2sec.mp3'
import {useLocation} from 'react-router-dom'
import {HeadButtons} from '../commonComponents/HeadButtons/HeadButtons'
import {CountSettings} from '../commonComponents/CountSettings/CountSettings'

export const SettingsCountContainer: FC = memo(() => {

        const [isDisabledCheckboxVoice, setIsDisabledCheckboxVoice] = useState<boolean>(false)
        const [rocket] = useSound(rocket_start)
        const location = useLocation()
        const dispatch = useDispatch()

        const {
            numberComposition,
            actionsAmount,
            speed,
            isVoiceOn
        } = useSelector((state: AppRootStateType) => state.count)

        const disabledCheckboxCondition: boolean = (numberComposition < 11 && speed < 1)
            || (numberComposition > 10 && numberComposition < 21 && speed < 1.2)
            || numberComposition > 20

        const setSound = useCallback(() => dispatch(switchSound({isSoundOn: isVoiceOn})), [dispatch, isVoiceOn])

        useEffect(() => {
            if (disabledCheckboxCondition) {
                setSound()
                setIsDisabledCheckboxVoice(true)
            } else {
                setSound()
                setIsDisabledCheckboxVoice(false)
            }
        }, [speed, setSound, disabledCheckboxCondition])

        const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setNumberComp({numberComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeTimeOutValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setSpeed({speed: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setActionsCount({actionsAmount: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeVoice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(switchSound({isSoundOn: e.currentTarget.checked}))
        }, [dispatch])
        const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => e.target.select(), [])
        const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])
        const makeActionsArrayAndAnswer = () => dispatch(setActionsArrayAndAnswer())
        const rocketSound = useCallback(() => rocket(), [rocket])
        const setTypeOfGame = () => dispatch(changeGame({typeOfGame: location.pathname}))

        const startRocket = () => {
            setIsRocket(true)
            makeActionsArrayAndAnswer()
            rocketSound()
            setTypeOfGame()
        }

        return <div className={s.container}>
            <HeadButtons callBack={handleBackToSettings}/>
            <CountSettings actionsAmount={actionsAmount}
                           speed={speed}
                           isVoiceOn={isVoiceOn}
                           isDisabledCheckboxVoice={isDisabledCheckboxVoice}
                           numberComposition={numberComposition}
                           handleFocus={handleFocus}
                           onChangeTimeOutValue={onChangeTimeOutValue}
                           onChangeActionsCount={onChangeActionsCount}
                           onChangeNumberComp={onChangeNumberComp}
                           onChangeVoice={onChangeVoice}
            />
            <button onClick={startRocket}>
                Старт
            </button>
        </div>
    }
)





