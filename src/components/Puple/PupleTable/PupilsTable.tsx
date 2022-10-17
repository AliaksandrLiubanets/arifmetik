import {PacksTableHeader} from '../PacksTableHeader/PacksTableHeader'
import {PupilsList, PupilType} from '../PupilsList/PupilsList'
import t from './PupleTable.module.css'
import ava_Miron from '../../../assets/pupils/avatars/Miron.jpg'
import ava_Evgenia from '../../../assets/pupils/avatars/Evgenia.jpg'

const pupils: PupilType[] = [
    {id: 1, ava: ava_Evgenia, name: 'Евгения', email: 'evgenia@yandex.ru'},
    {id: 2, ava: ava_Miron, name: 'Мирон', email: 'miron@yandex.ru'},
]
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
            <PupilsList pupils={pupils}/>
            </tbody>
        </table>
    </div>
}