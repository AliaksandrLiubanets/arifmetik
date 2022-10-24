import React, {FC, memo} from 'react'
import s from '../GameStyles/GameStyles.module.css'
import {PreStart} from '../PreStart/PreStart'
import {ActionsAndAnsewrInput} from './ActionsAndAnsewrInput'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'


export const CountGame: FC = memo(() => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

        return (
            <div className={s.game}>
                {isPreStart
                    ? <PreStart />
                    : <ActionsAndAnsewrInput />
                }
            </div>
        )
    }
)

