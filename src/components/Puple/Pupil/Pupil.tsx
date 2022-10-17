import {FC, memo} from 'react'
import {PupilType} from '../PupilsList/PupilsList'
import s from './Pupil.module.css'

type PupilPropsType = {
    pupil: PupilType
}

export const Pupil: FC<PupilPropsType> = memo(({pupil}) => {

    return <tr>
        <td style={{cursor: 'pointer'}}>{pupil.id}</td>
        <td><img src={pupil.ava} alt={'avatar'} className={s.avatar}/></td>
        <td>{pupil.name}</td>
        <td>{pupil.email}</td>
        <td>Выполнить задание</td>
        <td>
            😉
        </td>
    </tr>
})