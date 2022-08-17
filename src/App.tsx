import React from 'react'
import './App.css'
import {Settings} from './components/Settings/Settings'
import {Game} from './components/Game/Game'

function App() {
    const [isStarted, setIsStarted] = React.useState(false)
    const [numberComp, setNumberComp] = React.useState(10)
    const [timeoutValue, setTimeoutValue] = React.useState(0.8)
    const [actionsCount, setActionsCount] = React.useState(2)
    const [restart, setRestart] = React.useState(false)

    return (
        <div className="App">
            {isStarted
                ? <Game numberComp={numberComp}
                        timeoutValue={timeoutValue}
                        actionsCount={actionsCount}
                        setIsStarted={setIsStarted}
                        setRestart={setRestart}
                        restart={restart}
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
                />
            }
        </div>
    )
}

export default App
