import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../enums/paths'
import dominoes from '../../assets/main-icons/dominoes_2.jpg'
import digits from '../../assets/main-icons/digits_1.jpg'
import pupils from '../../assets/pupils/avatars/pupils.jpg'
import hometask from '../../assets/main-icons/homework.jpg'
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
            <NavLink to={PATH.PUPILS}>
                <div className={s.item}>
                    <img src={pupils} alt={'pupils_icon'}/>
                    <div>Ученики</div>
                </div>
            </NavLink>
        </div>
        <div className={s.icon_link}>
            <NavLink to={PATH.HOMETASK}>
                <div className={s.item}>
                    <img src={hometask} alt={'hometask_icon'}/>
                    <div>Назначение дз</div>
                </div>
            </NavLink>
        </div>
    </div>
}