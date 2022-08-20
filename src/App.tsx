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

    const makeActionsArrayAndAnswer = useCallback(() => {
        const {arrayOfCalculations, answer} = getArrayOfCalculationsAndAnswer(actionsCount, numberComp)
        const copyArray = [...arrayOfCalculations]
        setActionsArray(copyArray)
        console.log('actionsArray', actionsArray)
        console.log('answer', answer)
        setAnswer(answer)
    }, [actionsArray, numberComp, speed, actionsCount, restart])

    const restartGame = useCallback(() => setRestart(!restart), [])
    const startGame = useCallback((isStarted: boolean) => setIsStarted(isStarted), [])
    const setCountOfActions = useCallback((value: number) => setActionsCount(value), [])
    const setNumberComposition = useCallback((value: number) => setNumberComp(value), [])
    const setTimeoutValue = useCallback((value: number) => setSpeed(value), [])
    console.log('App')
    return (
        <div className="App">
            {isStarted
                ? <Game numberComp={numberComp}
                        timeoutValue={speed}
                        actionsCount={actionsCount}
                        actionsArray={actionsArray}
                        answer={answer}
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
                />
            }
        </div>
    )
}

export default App
