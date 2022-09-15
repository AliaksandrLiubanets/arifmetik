import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {FlashCardsGame} from './FlashCardsGame'
import React from 'react'
import {SettingsFlashCardsBlock} from '../SettingsFlashCards/SettingsFlashCardsBlock'

export const FlashCardsBlock = () => {
    const isStarted = useSelector((state: AppRootStateType) => state.app.isStarted)
    return <>
        {
            isStarted
                ? <FlashCardsGame />
                : <SettingsFlashCardsBlock />
        }
    </>
}
