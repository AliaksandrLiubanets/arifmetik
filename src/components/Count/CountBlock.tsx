import React, {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {CountGame} from './CountGame'
import {SettingsBlock} from '../SettingsBlock/SettingsBlock'
import useSound from 'use-sound'
import rocket_start from '../../assets/sounds/rocket/rocket_2sec.mp3'

export const CountBlock = () => {
    const isStartedCount = useSelector((state: AppRootStateType) => state.count.isStarted)
    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])

    return <>
        {isStartedCount
            ? <CountGame rocketSound={rocketSound}/>
            : <SettingsBlock rocketSound={rocketSound}/>
        }
    </>
}