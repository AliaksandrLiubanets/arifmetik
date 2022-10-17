import React from 'react'
import {PupilsTable} from './PupleTable/PupilsTable'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'

export const Pupils = () => {
    return <>
        <NavLink to={PATH.MAIN}>
            <button>На главную</button>
        </NavLink>
        <div>
            <PupilsTable/>
        </div>
    </>
}