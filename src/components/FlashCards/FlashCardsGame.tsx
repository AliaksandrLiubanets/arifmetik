import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {PreStart} from '../PreStart/PreStart'
import {FlashCards} from './FlashCards'


export const FlashCardsGame: FC = () => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

    return <>
        {isPreStart
            ? <PreStart/>
            : <FlashCards />
        }
    </>
}

