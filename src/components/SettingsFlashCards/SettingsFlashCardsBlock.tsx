import React, {FC, memo} from 'react'
import {PreStart} from '../PreStart/PreStart'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {SettingsCount} from '../SettingsCount/SettingsCount'
import {SettingsCards} from './SettingsCards/SettingsCards'

type Props = {
    rocketSound: () => void
}

export const SettingsFlashCardsBlock: FC<Props> = memo(({rocketSound}) => {

    const {isPreStart} = useSelector((state: AppRootStateType) => state.count)

    return <>
        {isPreStart
            ? <PreStart/>
            : <SettingsCards rocketSound={rocketSound}/>
        }
    </>
})
