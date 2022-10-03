import React, {FC, memo} from 'react'
import s from './/Game.module.css'
import {PreStart} from '../PreStart/PreStart'
import {Count} from './Count'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'


export const CountGame: FC = memo(() => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

        return (
            <div className={s.game}>
                {isPreStart
                    ? <PreStart />
                    : <Count />
                }
            </div>
        )
    }
)

