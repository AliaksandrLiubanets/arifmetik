import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../enums/paths'
import dominoes from '../../assets/main-icons/dominoes_2.jpg'
import digits from '../../assets/main-icons/digits_1.jpg'
import puple from '../../assets/puple/avatars/puple.jpg'
import s from './Main.module.css'

export const Main = () => {

    return <div className={s.content}>
        <div className={s.icon_link}>
            <NavLink to={PATH.FLASH}>
                <div className={s.item}>
                    <img src={dominoes} alt={'dominoes_icon'}/>
                    <div>Флэшкарты</div>
                </div>
            </NavLink>
        </div>
        <div className={s.icon_link}>
            <NavLink to={PATH.COUNT}>
                <div className={s.item}>
                    <img src={digits} alt={'digits_icon'}/>
                    <div>Счёт</div>
                </div>
            </NavLink>
        </div>
        <div className={s.icon_link}>
            <NavLink to={PATH.PUPLE}>
                <div className={s.item}>
                    <img src={puple} alt={'puple_icon'}/>
                    <div>Ученики</div>
                </div>
            </NavLink>
        </div>
    </div>
}