import React, {FC, memo} from 'react'
import s from '../Game/Game.module.css'
import {PreStart} from '../PreStart/PreStart'
import {ActionsAnswer} from '../ActionsAnswer/ActionsAnswer'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'

type Props = {
    rocketSound: () => void
}

export const GameBlock: FC<Props> = memo(({rocketSound}) => {

    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)

        return (
            <div className={s.game}>
                {isPreStart
                    ? <PreStart />
                    : <ActionsAnswer rocketSound={rocketSound}/>
                }
            </div>
        )
    }
)

