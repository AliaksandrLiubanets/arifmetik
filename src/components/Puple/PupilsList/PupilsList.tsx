import {FC, memo} from 'react'
import {Pupil} from '../Pupil/Pupil'

export type PupilType = {
    id: number
    ava: string
    name: string
    email: string
}

type PupilListPropsType = {
    pupils: PupilType[]
}

export const PupilsList: FC<PupilListPropsType> = memo(({pupils}) => {
    return <>
        {
            pupils.map(pupil => <Pupil
                key={pupil.id} pupil={pupil}
            />)
        }
    </>
})