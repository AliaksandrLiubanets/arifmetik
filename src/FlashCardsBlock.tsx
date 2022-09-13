import React, {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {FlashCardsGame} from './components/FlashCards/FlashCardsGame'
import {SettingsFlashCardsBlock} from './components/SettingsFlashCards/SettingsFlashCardsBlock'
import useSound from 'use-sound'
import rocket_start from './assets/sounds/rocket/rocket_2sec.mp3'

export const FlashCardsBlock = () => {
    const isStartedFlashCard = useSelector((state: AppRootStateType) => state.cards.isStarted)
    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    return <>
        {isStartedFlashCard
            ? <FlashCardsGame/>
            : <SettingsFlashCardsBlock rocketSound={rocketSound}/>
        }
    </>
}