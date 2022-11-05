import {NavLink, useNavigate} from 'react-router-dom'
import {PATH} from '../../../enums/paths'
import React, {FC} from 'react'
import s from './HeadButtons.module.css'


type HeadButtonsType = {
    callBack?: () => void
}

export const HeadButtons: FC<HeadButtonsType> = ({callBack}) => {
    const navigate = useNavigate()
    return <div className={s.head_buttons}><NavLink to={PATH.MAIN}>
        <button onClick={callBack}>На главную</button>
    </NavLink>
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    </div>
}