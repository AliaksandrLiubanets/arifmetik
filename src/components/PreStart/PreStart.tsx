import rocket from '../../assets/gif/rocket_tony.gif'
import {FC, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {startGame} from '../../store/countGameReducer'
import {switchPreStart} from '../../store/appReducer'

type Props = {}

export const PreStart: FC<Props> = () => {

    const dispatch = useDispatch()
    const isPreStart = useSelector((state: AppRootStateType) => state.app.isPreStart)
    const start = useCallback((isStarted: boolean) => dispatch(startGame({isStarted})), [])
    const setIsPrestart = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [])

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