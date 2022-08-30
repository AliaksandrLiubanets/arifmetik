import React, {ChangeEvent, FC, FocusEvent, memo, useEffect, useState} from 'react'
import s from './Settings.module.css'
import {PreStart} from '../PreStart/PreStart'

type Props = {
    numberComp: number
    timeoutValue: number
    actionsCount: number
    startGame: (isStarted: boolean) => void
    setNumberComposition: (numberComp: number) => void
    setTimeoutValue: (timeoutValue: number) => void
    setCountOfActions: (actionsCount: number) => void
    restartGame: () => void
    makeActionsArrayAndAnswer: () => void
    isSoundOn: boolean
    setSound: (isSoundOn: boolean) => void
    isRocket: boolean
    setIsRocket: (isRocket: boolean) => void
    rocketSound: () => void
}

export const Settings: FC<Props> = memo(({
                                             numberComp,
                                             timeoutValue,
                                             actionsCount,
                                             startGame,
                                             setNumberComposition,
                                             setTimeoutValue,
                                             setCountOfActions,
                                             restartGame,
                                             makeActionsArrayAndAnswer,
                                             isSoundOn,
                                             setSound,
                                             isRocket,
                                             setIsRocket,
                                             rocketSound
                                         }) => {

        const [isDisabledCheckboxSound, setIsDisabledCheckboxSound] = useState<boolean>(false)
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
        const onChangeNumberComp = (e: ChangeEvent<HTMLInputElement>) => setNumberComposition(e.currentTarget.valueAsNumber)
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            setTimeoutValue(e.currentTarget.valueAsNumber)
        }
        const onChangeActionsCount = (e: ChangeEvent<HTMLInputElement>) => setCountOfActions(e.currentTarget.valueAsNumber)
        const onChangeSound = (e: ChangeEvent<HTMLInputElement>) => {
            setSound(e.currentTarget.checked)
        }
        const startRocket = () => {
            setIsRocket(true)
            makeActionsArrayAndAnswer()
            rocketSound()
        }

        return <>
            {isRocket
                ? <PreStart startGame={startGame}
                            restartGame={restartGame}
                            setIsPrestart={setIsRocket}
                            isPrestart={isRocket}
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
