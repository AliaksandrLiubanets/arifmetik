import React from 'react'
import {PupilsTable} from './PupleTable/PupilsTable'
import {HeadButtons} from '../commonComponents/HeadButtons/HeadButtons'
import {RightAnswerCount} from '../commonComponents/RightAnswerCount/RightAnswerCount'

export const Pupils = () => {
    return <>
        <HeadButtons />
        <PupilsTable/>
        <RightAnswerCount />
    </>
}