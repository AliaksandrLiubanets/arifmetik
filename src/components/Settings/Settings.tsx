import React, {ChangeEvent, FC, FocusEvent} from 'react'
import s from './Settings.module.css'

type Props = {
    numberComp: number
    timeoutValue: number
    actionsCount: number
    setIsStarted: (isStarted: boolean) => void
    setNumberComp: (numberComp: number) => void
    setTimeoutValue: (timeoutValue: number) => void
    setActionsCount: (actionsCount: number) => void
    setRestart: (restart: boolean) => void
    restart: boolean
}

export const Settings: FC<Props> = ({
                                        numberComp,
                                        timeoutValue,
                                        actionsCount,
                                        setIsStarted,
                                        restart,
                                        setNumberComp,
                                        setTimeoutValue,
                                        setActionsCount,
                                        setRestart
                                    }) => {

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
    const onChangeNumberComp = (e: ChangeEvent<HTMLInputElement>) => setNumberComp(e.currentTarget.valueAsNumber)
    const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => setTimeoutValue(e.currentTarget.valueAsNumber)
    const onChangeActionsCount = (e: ChangeEvent<HTMLInputElement>) => setActionsCount(e.currentTarget.valueAsNumber)

    return (
        <div className={s.container}>
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

            <button
                    onClick={() => {
                        setIsStarted(true)
                        setRestart(!restart)
                    }}
            >
                Старт
            </button>


        </div>
    )
}

