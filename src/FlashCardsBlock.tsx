import React from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {FlashCardsGame} from './components/FlashCards/FlashCardsGame'
import {SettingsFlashCardsBlock} from './components/SettingsFlashCards/SettingsFlashCardsBlock'

export const FlashCardsBlock = () => {
    const isStarted = useSelector((state: AppRootStateType) => state.app.isStarted)

    return <>
        {isStarted
            ? <FlashCardsGame/>
            : <SettingsFlashCardsBlock />
        }
    </>
}