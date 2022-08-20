import React, {ChangeEvent, FC, FocusEvent, memo} from 'react'
import s from './Settings.module.css'

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
                                             setSound
                                         }) => {

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
        const onChangeNumberComp = (e: ChangeEvent<HTMLInputElement>) => setNumberComposition(e.currentTarget.valueAsNumber)
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => setTimeoutValue(e.currentTarget.valueAsNumber)
        const onChangeActionsCount = (e: ChangeEvent<HTMLInputElement>) => setCountOfActions(e.currentTarget.valueAsNumber)
        const onChangeSound = (e:  ChangeEvent<HTMLInputElement>) => setSound(e.currentTarget.checked)

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
                <div className={s.settings_block}>
                    <label>
                        <input
                            checked={isSoundOn}
                            type="checkbox"
                            onChange={onChangeSound}
                        />со звуком
                    </label>
                </div>

                <button
                    onClick={() => {
                        startGame(true)
                        restartGame()
                        makeActionsArrayAndAnswer()
                    }}
                >
                    Старт
                </button>


            </div>
        )
    }
)
