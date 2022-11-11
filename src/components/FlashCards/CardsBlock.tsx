import React from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {FlashCardsGame} from './FlashCardsGame'
import {SettingsFlashCardsBlock} from '../SettingsFlashCards/SettingsFlashCardsBlock'

export const CardsBlock = () => {
    const isStarted = useSelector((state: AppRootStateType) => state.app.isStarted)

    return <>
        {isStarted
            ? <FlashCardsGame/>
            : <SettingsFlashCardsBlock />
        }
    </>
}