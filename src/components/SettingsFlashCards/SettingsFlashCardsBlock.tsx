import React, {FC, memo} from 'react'
import {PreStart} from '../PreStart/PreStart'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {SettingsCards} from './SettingsCards/SettingsCards'


export const SettingsFlashCardsBlock: FC = memo(() => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

    return <>
        {isPreStart
            ? <PreStart/>
            : <SettingsCards />
        }
    </>
})

