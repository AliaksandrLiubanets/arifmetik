import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from './AllActions.module.css'
import {ActionAndSoundType} from '../../../store/countGameReducer'

type AllActionsPropsType = {}

export const AllActions: FC<AllActionsPropsType> = () => {
    const {actionsArray, answer} = useSelector((state: AppRootStateType) => state.count)
    let array: string[] = actionsArray.map((obj: ActionAndSoundType) => obj.action)
    const actionsStr: string = ''.concat(...array)
    const allExerciseStr: string = `${actionsStr} = ${answer}`

    console.log('answer:', answer)

    return <div className={s.container}>
        <div className={s.allExercise}>
            {allExerciseStr}
        </div>
    </div>
}