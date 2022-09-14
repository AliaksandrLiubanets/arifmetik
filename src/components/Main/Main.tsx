import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../enums/paths'
import dominoes from '../../assets/main-icons/dominoes.png'

export const Main = () => {

    return <>
        {/*<div><NavLink to={PATH.MAIN}>На главную</NavLink></div>*/}
        <div>
            <NavLink to={PATH.FLASH}>
                <div>
                    <div>Флэшкарты</div>
                    <img src={dominoes} alt={'dominoes_icon'}/>
                </div>
            </NavLink>
        </div>
        <div><NavLink to={PATH.COUNT}>Счёт</NavLink></div>
    </>
}