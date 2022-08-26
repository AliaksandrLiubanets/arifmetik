// import rocket from '../../assets/gif/raketa_letit_v_kosmose_graciozno_povorachivajas.gif'
import rocket from '../../assets/gif/rocket_tony.gif'
import {FC, useEffect} from 'react'

type Props = {
    isRocket: boolean
    setIsRocket: (isRocket: boolean) => void
    startGame: (isStarted: boolean) => void
    restartGame: () => void
}

export const PreStart:FC<Props> = ({isRocket, setIsRocket, startGame, restartGame}) => {

    useEffect(() => {
        let id = setTimeout(() => {
            if (isRocket) {
                startGame(true)
                restartGame()
                setIsRocket(false)
            }
        }, 2000)
        return () => {
            clearInterval(id)
        }
    }, [isRocket, startGame, restartGame, setIsRocket])

    return <div>
        <img src={rocket} alt={''} />
    </div>
}