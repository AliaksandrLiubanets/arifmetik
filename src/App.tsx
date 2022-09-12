import React, {useCallback} from 'react'
import './App.css'
import {CountBlock} from './components/Count/CountBlock'
import useSound from 'use-sound'
import rocket_start from './assets/sounds/rocket/rocket_2sec.mp3'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {FlashCardsBlock} from './components/FlashCards/FlashCardsBlock'
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock'
import {SettingsFlashCardsBlock} from './components/SettingsFlashCards/SettingsFlashCardsBlock'

function App() {
    const isStartedCount = useSelector((state: AppRootStateType) => state.count.isStarted)
    const isStartedFlashCard = useSelector((state: AppRootStateType) => state.cards.isStarted)
    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    return (
        <div className="App">
            <div className={'bg'}></div>
            {isStartedCount
                ? <CountBlock rocketSound={rocketSound} />
                : <SettingsBlock rocketSound={rocketSound} />
            }
            {isStartedFlashCard
                ? <FlashCardsBlock />
                : <SettingsFlashCardsBlock rocketSound={rocketSound}/>
            }
        </div>
    )
}

export default App


