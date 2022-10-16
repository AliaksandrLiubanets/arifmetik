import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404} from '../Error404/Error404'
import {FlashCardsBlock} from '../../FlashCardsBlock'
import {CountBlock} from '../Count/CountBlock'
import {Main} from '../Main/Main'
import {PATH} from '../../enums/paths'
import {Puple} from '../Puple/Puple'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATH.MAIN}/>}/>
            <Route path={PATH.COUNT} element={<CountBlock/>}/>
            <Route path={PATH.FLASH} element={<FlashCardsBlock/>}/>
            <Route path={PATH.MAIN} element={<Main/>}/>
            <Route path={PATH.PUPLE} element={<Puple/>}/>
            <Route path={PATH.ERROR_404} element={<Error404/>}/>
            <Route path="*" element={<Navigate to={PATH.ERROR_404}/>}/>
        </Routes>
    )
}