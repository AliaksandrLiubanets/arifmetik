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
import {NavLink, useLocation} from 'react-router-dom'
import {PATH} from '../../enums/paths'

export const SettingsCount: FC = memo(() => {

        const [isDisabledCheckboxSound, setIsDisabledCheckboxSound] = useState<boolean>(false)
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
            speed,
            isSoundOn
        } = useSelector((state: AppRootStateType) => state.count)

        const setTimeoutValue = useCallback((speed: number) => dispatch(setSpeed({speed})), [dispatch])
        const setSound = useCallback((isSoundOn: boolean) => dispatch(switchSound({isSoundOn})), [dispatch])
        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

        const disabledCheckboxCondition: boolean = (numberComposition < 11 && speed < 1)
            || (numberComposition > 10 && numberComposition < 21 && speed < 1.2)
            || numberComposition > 20

        useEffect(() => {
            if (disabledCheckboxCondition) {
                setSound(false)
                setIsDisabledCheckboxSound(true)
            } else {
                setSound(true)
                setIsDisabledCheckboxSound(false)
            }
        }, [speed, setSound, disabledCheckboxCondition])

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

        const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setNumberComp({numberComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            setTimeoutValue(e.currentTarget.valueAsNumber)
        }
        const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setActionsCount({actionsCount: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeSound = (e: ChangeEvent<HTMLInputElement>) => {
            setSound(e.currentTarget.checked)
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
            <NavLink to={PATH.MAIN}>
                <button onClick={handleBackToSettings}>На главную</button>
            </NavLink>
            <div className={s.settings_frame}>
                <div className={s.settings_item}>
                    <div>Состав числа:</div>
                    <input
                        value={numberComposition}
                        type="number"
                        onChange={onChangeNumberComp}
                        onFocus={handleFocus}
                    />
                </div>
                <div className={s.settings_item}>
                    <div>Скорость:</div>
                    <input
                        value={speed}
                        type="number"
                        onChange={onChangeTimeOutValue}
                        onFocus={handleFocus}
                    />
                </div>
                <div className={s.settings_item}>
                    <div>Количество действий:</div>
                    <input
                        value={actionsCount}
                        type="number"
                        onChange={onChangeActionsCount}
                        onFocus={handleFocus}
                    />
                </div>
                <div className={s.settings_item}>
                    <label>
                        <input
                            checked={isSoundOn}
                            type="checkbox"
                            onChange={onChangeSound}
                            disabled={isDisabledCheckboxSound}
                        />со звуком
                    </label>
                </div>
            </div>
            <button onClick={startRocket}>
                Старт
            </button>
        </div>
    }
)
