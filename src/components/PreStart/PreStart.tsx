import rocket from '../../assets/gif/rocket_tony.gif'
import {FC, useEffect} from 'react'

type Props = {
    isPrestart: boolean
    setIsPrestart: (isRocket: boolean) => void
    startGame: (isStarted: boolean) => void
    restartGame: () => void
}

export const PreStart: FC<Props> = ({isPrestart, setIsPrestart, startGame, restartGame}) => {

    useEffect(() => {
        let id = setTimeout(() => {
            if (isPrestart) {
                startGame(true)
                restartGame()
                setIsPrestart(false)
            }
        }, 2000)
        return () => {
            clearInterval(id)
        }
    }, [isPrestart, startGame, restartGame, setIsPrestart])

    return <div>
        <img src={rocket} alt={''}/>
    </div>
}