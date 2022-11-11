import {NavLink, useNavigate} from 'react-router-dom'
import {PATH} from '../../../enums/paths'
import React, {FC} from 'react'
import s from './HeadButtons.module.css'


type HeadButtonsType = {
    callBack?: () => void
    switchHWSettings?: (isHWSettings: boolean) => void
    makeCardsTasksAmount?: () => void
}

export const HeadButtons: FC<HeadButtonsType> = ({callBack, switchHWSettings, makeCardsTasksAmount}) => {
    const navigate = useNavigate()

    const saveSettings = () => {
        switchHWSettings && switchHWSettings(false)
        makeCardsTasksAmount && makeCardsTasksAmount()
    }

    const back = () => {
        navigate(-1)
        callBack && callBack()
        saveSettings()
    }
    const toMain = () => {
        callBack && callBack()
        saveSettings()
    }

    return <div className={s.head_buttons}><NavLink to={PATH.MAIN}>
        <button onClick={toMain}>На главную</button>
    </NavLink>
        <div>
            <button onClick={back}>Назад</button>
        </div>
    </div>
}