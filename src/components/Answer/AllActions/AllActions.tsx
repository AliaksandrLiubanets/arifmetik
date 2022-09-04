import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from './AllActions.module.css'

type AllActionsPropsType = {}

export const AllActions: FC<AllActionsPropsType> = () => {
    const {actionsArray, answer} = useSelector((state: AppRootStateType) => state.count)
    const actionsStr: string = ''.concat(...actionsArray)
    const allExerciseStr: string = `${actionsStr} = ${answer}`


    return <div className={s.container}>
        <div className={s.allExercise}>
            {allExerciseStr}
        </div>
    </div>
}