import React, {useCallback} from 'react'
import './App.css'
import {Settings} from './components/Settings/Settings'
import {Game} from './components/Game/Game'
import {getArrayOfCalculationsAndAnswer} from './utils/getResultAndAction'

function App() {
    const [isStarted, setIsStarted] = React.useState(false)
    const [numberComp, setNumberComp] = React.useState(10)
    const [speed, setSpeed] = React.useState(1)
    const [actionsCount, setActionsCount] = React.useState(4)
    const [restart, setRestart] = React.useState(false)
    const [actionsArray, setActionsArray] = React.useState<string[]>([])
    const [answer, setAnswer] = React.useState<number>(0)
    const [isSoundOn, setIsSoundOn] = React.useState<boolean>(true)

    const makeActionsArrayAndAnswer = useCallback(() => {
        const {arrayOfCalculations, answer} = getArrayOfCalculationsAndAnswer(actionsCount, numberComp)
        const copyArray = [...arrayOfCalculations]
        setActionsArray(copyArray)
        setAnswer(answer)
    }, [numberComp, actionsCount])

    const restartGame = useCallback(() => setRestart(!restart), [restart])
    const startGame = useCallback((isStarted: boolean) => setIsStarted(isStarted), [])
    const setCountOfActions = useCallback((actionsCount: number) => setActionsCount(actionsCount), [])
    const setNumberComposition = useCallback((numberComp: number) => setNumberComp(numberComp), [])
    const setTimeoutValue = useCallback((speed: number) => setSpeed(speed), [])
    const setSound = useCallback((isSoundOn: boolean) => setIsSoundOn(isSoundOn), [])

    return (
        <div className="App">
                <div className={'bg'}></div>

                    {isStarted

                        ? <Game numberComp={numberComp}
                                timeoutValue={speed}
                                actionsCount={actionsCount}
                                actionsArray={actionsArray}
                                answer={answer}
                                isSoundOn={isSoundOn}
                                startGame={startGame}
                                restartGame={restartGame}
                                makeActionsArrayAndAnswer={makeActionsArrayAndAnswer}
                        />
                        : <Settings actionsCount={actionsCount}
                                    timeoutValue={speed}
                                    numberComp={numberComp}
                                    startGame={startGame}
                                    restartGame={restartGame}
                                    setCountOfActions={setCountOfActions}
                                    setNumberComposition={setNumberComposition}
                                    setTimeoutValue={setTimeoutValue}
                                    makeActionsArrayAndAnswer={makeActionsArrayAndAnswer}
                                    setSound={setSound}
                                    isSoundOn={isSoundOn}
                        />
                    }
                </div>
    )
}

export default App
