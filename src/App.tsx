import React, {useCallback} from 'react'
import './App.css'
import {Settings} from './components/Settings/Settings'
import {Game} from './components/Game/Game'
import {getArrayOfCalculationsAndAnswer} from './utils/getResultAndAction'

function App() {
    const [isStarted, setIsStarted] = React.useState(false)
    const [numberComp, setNumberComp] = React.useState(10)
    const [timeoutValue, setTimeoutValue] = React.useState(1)
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
    }, [actionsArray, numberComp, timeoutValue, actionsCount, restart])

    // const makeActionsArrayAndAnswer = () => {
    //     const {arrayOfCalculations, answer} = getArrayOfCalculationsAndAnswer(actionsCount, numberComp)
    //     setActionsArray(arrayOfCalculations)
    //     console.log('actionsArray', actionsArray)
    //     console.log('answer', answer)
    //     setAnswer(answer)
    // }

    return (
        <div className="App">
            {isStarted
                ? <Game numberComp={numberComp}
                        timeoutValue={timeoutValue}
                        actionsCount={actionsCount}
                        setIsStarted={setIsStarted}
                        setRestart={setRestart}
                        restart={restart}
                        actionsArray={actionsArray}
                        answer={answer}
                        makeActionsArrayAndAnswer={makeActionsArrayAndAnswer}
                />
                : <Settings setIsStarted={setIsStarted}
                            restart={restart}
                            actionsCount={actionsCount}
                            timeoutValue={timeoutValue}
                            numberComp={numberComp}
                            setActionsCount={setActionsCount}
                            setNumberComp={setNumberComp}
                            setTimeoutValue={setTimeoutValue}
                            setRestart={setRestart}
                            makeActionsArrayAndAnswer={makeActionsArrayAndAnswer}
                />
            }
        </div>
    )
}

export default App
