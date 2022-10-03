import React, {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {CountGame} from './CountGame'
import {SettingsBlock} from '../SettingsBlock/SettingsBlock'
import useSound from 'use-sound'
import rocket_start from '../../assets/sounds/rocket/rocket_2sec.mp3'

export const CountBlock = () => {
    const isStarted = useSelector((state: AppRootStateType) => state.app.isStarted)

    return <>
        {isStarted
            ? <CountGame />
            : <SettingsBlock />
        }
    </>
}