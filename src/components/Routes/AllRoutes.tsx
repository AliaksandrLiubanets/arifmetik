import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404} from '../Error404/Error404'
import {CardsBlock} from '../FlashCards/CardsBlock'
import {CountBlock} from '../Count/CountBlock'
import {Main} from '../Main/Main'
import {PATH} from '../../enums/paths'
import {Pupils} from '../Pupils/Pupils'
import {TaskTable} from '../Pupils/HomeWork/TaskTable'
import {HomeWork} from '../Pupils/HomeWork/HomeWork'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATH.MAIN}/>}/>
            <Route path={PATH.COUNT} element={<CountBlock/>}/>
            <Route path={PATH.FLASH} element={<CardsBlock/>}/>
            <Route path={PATH.MAIN} element={<Main/>}/>
            <Route path={PATH.PUPILS} element={<Pupils/>}/>
            <Route path={PATH.HOMETASK} element={<TaskTable />}/>
            <Route path={PATH.HOMEWORK} element={<HomeWork />}/>
            <Route path={PATH.ERROR_404} element={<Error404/>}/>
            <Route path="*" element={<Navigate to={PATH.ERROR_404}/>}/>
        </Routes>
    )
}