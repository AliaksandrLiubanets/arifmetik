import {FC, memo} from 'react'
import s from './Pupil.module.css'
import {AuthUserData} from '../../../store/authReducer'

type PupilPropsType = {
    pupil: AuthUserData
}

export const Pupil: FC<PupilPropsType> = memo(({pupil}) => {

    return <tr>
        <td style={{cursor: 'pointer'}}>{pupil.id}</td>
        <td><img src={pupil.ava} alt={'avatar'} className={s.avatar}/></td>
        <td>{pupil.login}</td>
        <td>{pupil.email}</td>
        <td>Выполнить задание</td>
        <td>
            😉
        </td>
    </tr>
})