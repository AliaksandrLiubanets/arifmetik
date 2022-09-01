import rocket from '../../assets/gif/rocket_tony.gif'
import {FC, useEffect} from 'react'

type Props = {
    isPrestart: boolean
    setIsPrestart: (isRocket: boolean) => void
    startGame: (isStarted: boolean) => void
}

export const PreStart: FC<Props> = ({isPrestart, setIsPrestart, startGame}) => {

    useEffect(() => {
        let id = setTimeout(() => {
            if (isPrestart) {
                startGame(true)
                setIsPrestart(false)
            }
        }, 2000)
        return () => {
            clearInterval(id)
        }
    }, [isPrestart, startGame, setIsPrestart])

    return <div>
        <img src={rocket} alt={''}/>
    </div>
}