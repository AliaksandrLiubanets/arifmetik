import React, {FC, memo} from 'react'
import {PreStart} from '../PreStart/PreStart'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {Settings} from '../Settings/Settings'

type Props = {
    rocketSound: () => void
}

export const SettingsBlock: FC<Props> = memo(({rocketSound}) => {

    const {isPreStart} = useSelector((state: AppRootStateType) => state.count)

    return <>
        {isPreStart
            ? <PreStart/>
            : <Settings rocketSound={rocketSound}/>

        }
    </>
})
