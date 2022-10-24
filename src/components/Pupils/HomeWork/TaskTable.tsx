import {NavLink} from 'react-router-dom'
import {PATH} from '../../../enums/paths'
import {PupilsTable} from '../PupleTable/PupilsTable'
import React from 'react'

export const TaskTable = () => {

    return <>
        <NavLink to={PATH.MAIN}>
            <button>На главную</button>
        </NavLink>
        <div>
            <PupilsTable/>
        </div>
    </>
}