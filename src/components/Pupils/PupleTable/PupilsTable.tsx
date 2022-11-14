import {PacksTableHeader} from '../PacksTableHeader/PacksTableHeader'
import {PupilsList} from '../PupilsList/PupilsList'
import t from './PupleTable.module.css'
import {useLocation} from 'react-router-dom'
import {HomeWorkSettings} from '../HomeWork/HomeWorkSettings/HomeWorkSettings'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {setCurrentUserId} from '../../../store/homeWorkReducer'


export const PupilsTable = () => {
    const dispatch = useDispatch()
    const {isHWSettings, currentUserId} = useSelector((state: AppRootStateType) => state.homework)

    const handleUserId = (userId: number ) => dispatch(setCurrentUserId({currentUserId: userId }))

    const location = useLocation()
    const isTaskApplicationTable = location.pathname === '/hometask'
    const headerName = isTaskApplicationTable ? 'Назначить дз' : 'Домашнее задание'

        return <div className={t.tableContainer}>
        <table className={t.table}>
            <thead>
            <tr>
                <PacksTableHeader text={'Id'} />
                <PacksTableHeader text={'Ава'} />
                <PacksTableHeader text={'Имя'} />
                <PacksTableHeader text={'E-mail'} />
                <PacksTableHeader text={headerName} />
                <th className={t.actions}>
                    Actions
                </th>
            </tr>
            </thead>
            <tbody>
            <PupilsList handleUserId={handleUserId} />
            </tbody>
        </table>
            {
                isHWSettings && <HomeWorkSettings userId={currentUserId} />
            }
    </div>
}