import React, {FC, memo} from 'react'
import {PreStart} from '../PreStart/PreStart'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {SettingsCount} from '../SettingsCount/SettingsCount'

type Props = {
    rocketSound: () => void
}

export const SettingsBlock: FC<Props> = memo(({rocketSound}) => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

    return <>
        {isPreStart
            ? <PreStart/>
            : <SettingsCount rocketSound={rocketSound}/>
        }
    </>
})
