import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../enums/paths'

export const Main = () => {

    return <>
        <div className={'bg'}></div>
        {/*<div><NavLink to={PATH.MAIN}>На главную</NavLink></div>*/}
        <div><NavLink to={PATH.FLASH}>Флэшкарты</NavLink></div>
        <div><NavLink to={PATH.COUNT}>Счёт</NavLink></div>
    </>
}