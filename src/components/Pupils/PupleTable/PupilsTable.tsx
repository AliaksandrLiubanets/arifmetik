import {PacksTableHeader} from '../PacksTableHeader/PacksTableHeader'
import {PupilsList} from '../PupilsList/PupilsList'
import t from './PupleTable.module.css'

export const PupilsTable = () => {

        return <div className={t.tableContainer}>
        <table className={t.table}>
            <thead>
            <tr>
                <PacksTableHeader text={'Id'} />
                <PacksTableHeader text={'Ава'} />
                <PacksTableHeader text={'Имя'} />
                <PacksTableHeader text={'E-mail'} />
                <PacksTableHeader text={'Домашнее задание'} />
                <th className={t.actions}>
                    Actions
                </th>
            </tr>
            </thead>
            <tbody>
            <PupilsList />
            </tbody>
        </table>
    </div>
}