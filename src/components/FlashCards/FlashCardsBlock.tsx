import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {PreStart} from '../PreStart/PreStart'
import {FlashCards} from './FlashCards'


type Props = {
    rocketSound: () => void
}

export const FlashCardsBlock: FC<Props> = ({rocketSound}) => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

    return <>
        {isPreStart
            ? <PreStart/>
            : <FlashCards />
        }
    </>
}

