import React, {ChangeEvent, FC, FocusEvent, memo, useCallback, useEffect, useState} from 'react'
import s from './Settings.module.css'
import {PreStart} from '../PreStart/PreStart'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType, useAppSelector} from '../../store/store'
import {setActionsCount, setNumberComp} from '../../store/countGameReducer'

type Props = {
    numberComp: number
    timeoutValue: number
    actionsCount: number
    startGame: (isStarted: boolean) => void
    // setNumberComposition: (numberComp: number) => void
    setTimeoutValue: (timeoutValue: number) => void
    // setCountOfActions: (actionsCount: number) => void
    makeActionsArrayAndAnswer: () => void
    isSoundOn: boolean
    setSound: (isSoundOn: boolean) => void
    isPrestart: boolean
    setIsRocket: (isRocket: boolean) => void
    rocketSound: () => void
}

export const Settings: FC<Props> = memo(({
                                             // numberComp,
                                             timeoutValue,
                                             actionsCount,
                                             startGame,
                                             // setNumberComposition,
                                             setTimeoutValue,
                                             // setCountOfActions,
                                             makeActionsArrayAndAnswer,
                                             isSoundOn,
                                             setSound,
                                             isPrestart,
                                             setIsRocket,
                                             rocketSound
                                         }) => {

        const [isDisabledCheckboxSound, setIsDisabledCheckboxSound] = useState<boolean>(false)


    const dispatch = useDispatch()
    const numberComp = useSelector((state: AppRootStateType) => state.count.numberComposition)

    // const setNumberComposition = useCallback((numberComposition: number) => dispatch(setNumberComp({numberComposition} )), [])

    const disabledCheckboxCondition: boolean = (numberComp < 11 && timeoutValue < 1) || (numberComp > 10 && numberComp < 21 && timeoutValue < 1.2) || numberComp > 20

        useEffect(() => {
            if (disabledCheckboxCondition) {
                setSound(false)
                setIsDisabledCheckboxSound(true)
            } else {
                setSound(true)
                setIsDisabledCheckboxSound(false)
            }
        }, [timeoutValue, setSound, disabledCheckboxCondition])

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
        const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setNumberComp({numberComposition: e.currentTarget.valueAsNumber} )), [] )
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            setTimeoutValue(e.currentTarget.valueAsNumber)
        }
        const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setActionsCount({actionsCount: e.currentTarget.valueAsNumber} )), [] )
        const onChangeSound = (e: ChangeEvent<HTMLInputElement>) => {
            setSound(e.currentTarget.checked)
        }
        const startRocket = () => {
            setIsRocket(true)
            makeActionsArrayAndAnswer()
            rocketSound()
        }

        return <>
            {isPrestart
                ? <PreStart startGame={startGame}
                            setIsPrestart={setIsRocket}
                            isPrestart={isPrestart}
                />
                : <div className={s.container}>
                    <div className={s.settings_block}>
                        <div>Состав числа:</div>
                        <input
                            value={numberComp}
                            type="number"
                            onChange={onChangeNumberComp}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className={s.settings_block}>
                        <div>Скорость:</div>
                        <input
                            value={timeoutValue}
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
