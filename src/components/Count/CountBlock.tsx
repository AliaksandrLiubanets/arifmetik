import React from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {CountGame} from './CountGame'
import {SettingsBlock} from '../SettingsBlock/SettingsBlock'

export const CountBlock = () => {
    const isStarted = useSelector((state: AppRootStateType) => state.app.isStarted)

    return <>
        {isStarted
            ? <CountGame />
            : <SettingsBlock />
        }
    </>
}