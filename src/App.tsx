import React, {useCallback} from 'react'
import './App.css'
import {Settings} from './components/Settings/Settings'
import {Game} from './components/Game/Game'
import useSound from 'use-sound'
import rocket_start from './assets/sounds/rocket/rocket_2sec.mp3'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {FlashCards} from './components/FlashCards/FlashCards'
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock'

function App() {
    const isStarted = useSelector((state: AppRootStateType) => state.count.isStarted)
    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    return (
        <div className="App">
            <div className={'bg'}></div>
            {/*{isStarted*/}
            {/*    ? <Game rocketSound={rocketSound} />*/}
            {/*    : <SettingsBlock rocketSound={rocketSound} />*/}
            {/*}*/}
            <FlashCards/>
        </div>
    )
}

export default App


