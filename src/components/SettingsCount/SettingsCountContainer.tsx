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
        const rocketSound = useCallback(() => rocket(), [rocket])
        const location = useLocation()
        const setTypeOfGame = () => {
            dispatch(changeGame({typeOfGame: location.pathname}))
        }

        const dispatch = useDispatch()
        const {
            numberComposition,
            actionsCount,
            speedCount,
            isVoiceOn
        } = useSelector((state: AppRootStateType) => state.count)

        const setSound = useCallback(() => dispatch(switchSound({isSoundOn: isVoiceOn})), [dispatch, isVoiceOn])
        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

        const disabledCheckboxCondition: boolean = (numberComposition < 11 && speedCount < 1)
            || (numberComposition > 10 && numberComposition < 21 && speedCount < 1.2)
            || numberComposition > 20

        useEffect(() => {
            if (disabledCheckboxCondition) {
                setSound()
                setIsDisabledCheckboxVoice(true)
            } else {
                setSound()
                setIsDisabledCheckboxVoice(false)
            }
        }, [speedCount, setSound, disabledCheckboxCondition])

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

        const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setNumberComp({numberComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setSpeed({speed: e.currentTarget.valueAsNumber}))
        }
        const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setActionsCount({actionsCount: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeVoice = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(switchSound({isSoundOn: e.currentTarget.checked}))
        }
        const makeActionsArrayAndAnswer = () => dispatch(setActionsArrayAndAnswer())
        const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

        const startRocket = () => {
            setIsRocket(true)
            makeActionsArrayAndAnswer()
            rocketSound()
            setTypeOfGame()
        }

        return <div className={s.container}>
            <HeadButtons callBack={handleBackToSettings}/>
            <CountSettings actionsCount={actionsCount}
                           speed={speedCount}
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





