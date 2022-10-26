import {NavLink, useNavigate} from 'react-router-dom'
import {PATH} from '../../../enums/paths'
import React, {FC} from 'react'
import s from './HeadButtons.module.css'


type HeadButtonsType = {
    handleBackToSettings?: () => void
}

export const HeadButtons: FC<HeadButtonsType> = ({handleBackToSettings}) => {
    const navigate = useNavigate()
    return <div className={s.head_buttons}><NavLink to={PATH.MAIN}>
        <button onClick={handleBackToSettings}>На главную</button>
    </NavLink>
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    </div>
}