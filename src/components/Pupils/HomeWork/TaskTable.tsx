import {PupilsTable} from '../PupleTable/PupilsTable'
import React, {useCallback} from 'react'
import {HeadButtons} from '../../commonComponents/HeadButtons/HeadButtons'
import {useDispatch} from 'react-redux'
import {makeCardsTasksAmount, switchHWSettings} from '../../../store/homeWorkReducer'

export const TaskTable = () => {

    // This callbacks to save settings when we leave page pushing on back or toMain buttons
    const dispatch = useDispatch()
    const setHWSettings = useCallback((isHWSettings: boolean) => dispatch(switchHWSettings({isHWSettings})), [dispatch])
    const makeTasksAmount = useCallback(() => dispatch(makeCardsTasksAmount()), [dispatch])

    return <>
        <HeadButtons makeCardsTasksAmount={makeTasksAmount} switchHWSettings={setHWSettings}/>
        <PupilsTable />
    </>
}