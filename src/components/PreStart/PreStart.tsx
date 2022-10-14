import rocket from '../../assets/gif/rocket_tony.gif'
import {FC, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {startGame, switchPreStart} from '../../store/appReducer'

export const PreStart: FC = () => {

    const dispatch = useDispatch()
    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)
    const start = useCallback((isStarted: boolean) => dispatch(startGame({isStarted})), [dispatch])
    const setIsPrestart = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

    useEffect(() => {
        let id = setTimeout(() => {
            if (isPreStart) {
                start(true)
                setIsPrestart(false)
            }
        }, 2000)
        return () => {
            clearInterval(id)
        }
    }, [isPreStart, start, setIsPrestart])

    return <div>
        <img src={rocket} alt={''}/>
    </div>
}