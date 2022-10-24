import {FC, memo} from 'react'
import s from './Pupil.module.css'
import {AuthUserData} from '../../../store/authReducer'
import {NavLink, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {switchHWSettings} from '../../../store/homeWorkReducer'
import {PATH} from '../../../enums/paths'

type PupilPropsType = {
    pupil: AuthUserData
    handleUserId: (userId: number | null) => void
}

export const Pupil: FC<PupilPropsType> = memo(({pupil, handleUserId}) => {
    const location = useLocation()
    const isTaskApplicationTable = location.pathname === '/hometask'
    const dispatch = useDispatch()

    const toggleHWSettings = () => {
        handleUserId(pupil.id)
        dispatch(switchHWSettings({isHWSettings: true}))
    }

    return <tr>
        <td style={{cursor: 'pointer'}}>{pupil.id}</td>
        <td><img src={pupil.ava} alt={'avatar'} className={s.avatar}/></td>
        <td>{pupil.login}</td>
        <td>{pupil.email}</td>
        {
            isTaskApplicationTable
                ? <td onClick={() => {
                    toggleHWSettings()
                }}>{'Назначить дз'}</td>
                :
                <td>
                    <NavLink to={PATH.HOMEWORK}>
                        <div>{'Выполнить дз'}</div>
                    </NavLink>
                </td>

        }
        <td>
            😉
        </td>
    </tr>
})