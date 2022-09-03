import React, {ChangeEvent, FC, FocusEvent, memo, useCallback, useEffect, useState} from 'react'
import s from './Settings.module.css'
import {PreStart} from '../PreStart/PreStart'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {
    setActionsArrayAndAnswer,
    setActionsCount,
    setNumberComp,
    setSpeed,
    switchPreStart,
    switchSound
} from '../../store/countGameReducer'

type Props = {
    // startGame: (isStarted: boolean) => void
    // setNumberComposition: (numberComp: number) => void
    // setTimeoutValue: (timeoutValue: number) => void
    // setCountOfActions: (actionsCount: number) => void
    // makeActionsArrayAndAnswer: () => void
    // setSound: (isSoundOn: boolean) => void
    // setIsRocket: (isRocket: boolean) => void
    rocketSound: () => void
}

export const Settings: FC<Props> = memo(({
                                             // startGame,
                                             // setTimeoutValue,
                                             // setSound,
                                             // setIsRocket,
                                             rocketSound
                                         }) => {

        const [isDisabledCheckboxSound, setIsDisabledCheckboxSound] = useState<boolean>(false)

        const dispatch = useDispatch()
        const {
            numberComposition,
            actionsCount,
            speed,
            isSoundOn,
            isPreStart
        } = useSelector((state: AppRootStateType) => state.count)

        // const setNumberComposition = useCallback((numberComposition: number) => dispatch(setNumberComp({numberComposition} )), [])
        const setTimeoutValue = useCallback((speed: number) => dispatch(setSpeed({speed} )), [])
        const setSound = useCallback((isSoundOn: boolean) => dispatch(switchSound({isSoundOn} )), [])
        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart} )), [])

        const disabledCheckboxCondition: boolean = (numberComposition < 11 && speed < 1) || (numberComposition > 10 && numberComposition < 21 && speed < 1.2) || numberComposition > 20

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

        const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setNumberComp({numberComposition: e.currentTarget.valueAsNumber})), [])
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            setTimeoutValue(e.currentTarget.valueAsNumber)
        }
        const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setActionsCount({actionsCount: e.currentTarget.valueAsNumber})), [])
        const onChangeSound = (e: ChangeEvent<HTMLInputElement>) => {
            setSound(e.currentTarget.checked)
        }
    // const start = useCallback((isStarted: boolean) => dispatch(startGame({isStarted})), [])
        const makeActionsArrayAndAnswer = () => dispatch(setActionsArrayAndAnswer({}))
        const startRocket = () => {
            setIsRocket(true)
            makeActionsArrayAndAnswer()
            rocketSound()
        }

        return <>
            {isPreStart
                ? <PreStart
                    // startGame={startGame}
                            // setIsPrestart={setIsRocket}
                    // isPreStart={isPreStart}
                />
                : <div className={s.container}>
                    <div className={s.settings_block}>
                        <div>Состав числа:</div>
                        <input
                            value={numberComposition}
                            type="number"
                            onChange={onChangeNumberComp}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className={s.settings_block}>
                        <div>Скорость:</div>
                        <input
                            value={speed}
                            type="number"
                            onChange={onChangeTimeOutValue}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className={s.settings_block}>
                        <div>Количество действий:</div>
                        <input
                            value={actionsCount}
                            type="number"
                            onChange={onChangeActionsCount}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className={s.settings_block}>
                        <label>
                            <input
                                checked={isSoundOn}
                                type="checkbox"
                                onChange={onChangeSound}
                                disabled={isDisabledCheckboxSound}
                            />со звуком
                        </label>
                    </div>
                    <button onClick={startRocket}>
                        Старт
                    </button>
                </div>
            }
        </>
    }
)
