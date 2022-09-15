import {NavLink} from 'react-router-dom'
import {PATH} from '../../enums/paths'
import React from 'react'

export const Error404 = () => {

    return <>
            <div>Page not found!</div>
            <div>Go to <NavLink to={PATH.MAIN}>main page</NavLink></div>
        </>
}