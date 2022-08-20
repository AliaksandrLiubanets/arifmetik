import s from '../Game/Game.module.css'
import React, {FC, useEffect, useState} from 'react'
import useSound from 'use-sound'
import plus_1 from '../../assets/sounds/actions/+1.mp3'
import plus_2 from '../../assets/sounds/actions/+2.mp3'
import plus_3 from '../../assets/sounds/actions/+3.mp3'
import plus_4 from '../../assets/sounds/actions/+4.mp3'
import plus_5 from '../../assets/sounds/actions/+5.mp3'
import plus_6 from '../../assets/sounds/actions/+6.mp3'
import plus_7 from '../../assets/sounds/actions/+7.mp3'
import plus_8 from '../../assets/sounds/actions/+8.mp3'
import plus_9 from '../../assets/sounds/actions/+9.mp3'
import plus_10 from '../../assets/sounds/actions/+10.mp3'
import minus_1 from '../../assets/sounds/actions/-1.mp3'
import minus_2 from '../../assets/sounds/actions/-2.mp3'
import minus_3 from '../../assets/sounds/actions/-3.mp3'
import minus_4 from '../../assets/sounds/actions/-4.mp3'
import minus_5 from '../../assets/sounds/actions/-5.mp3'
import minus_6 from '../../assets/sounds/actions/-6.mp3'
import minus_7 from '../../assets/sounds/actions/-7.mp3'
import minus_8 from '../../assets/sounds/actions/-8.mp3'
import minus_9 from '../../assets/sounds/actions/-9.mp3'
import minus_10 from '../../assets/sounds/actions/-10.mp3'
import wrist from '../../assets/sounds/actions/whistling.mp3'

type Props = {
    actionsCount: number
    timeoutValue: number
    numberComp: number
    actionsArray: string[]
    setShowInput: (isShowAnswer: boolean) => void
}


export const Actions: FC<Props> = ({actionsArray, timeoutValue, actionsCount, numberComp, setShowInput}) => {
    const [calc, setCalc] = useState<string>('')
    const [index, setIndex] = useState<number>(0)


    useEffect(() => {
        if (index < actionsCount) {
            let id = setTimeout(() => {
                setCalc(actionsArray[index])
                setIndex(prevState => prevState + 1)
                actionSound()
            }, 1000 * timeoutValue)
            return () => {
                clearInterval(id)
            }
        }
        if (index === actionsCount) {
            setShowInput(true)
        }
    }, [calc, actionsCount, actionsArray, setShowInput, timeoutValue])

    const [p_1] = useSound(plus_1)
    const [p_2] = useSound(plus_2)
    const [p_3] = useSound(plus_3)
    const [p_4] = useSound(plus_4)
    const [p_5] = useSound(plus_5)
    const [p_6] = useSound(plus_6)
    const [p_7] = useSound(plus_7)
    const [p_8] = useSound(plus_8)
    const [p_9] = useSound(plus_9)
    const [p_10] = useSound(plus_10)
    const [m_1] = useSound(minus_1)
    const [m_2] = useSound(minus_2)
    const [m_3] = useSound(minus_3)
    const [m_4] = useSound(minus_4)
    const [m_5] = useSound(minus_5)
    const [m_6] = useSound(minus_6)
    const [m_7] = useSound(minus_7)
    const [m_8] = useSound(minus_8)
    const [m_9] = useSound(minus_9)
    const [m_10] = useSound(minus_10)
    const [w] = useSound(wrist)

    let actionSound: () => void
    switch(calc) {
        case '+1': actionSound = () => p_1()
            break
        case '+2': actionSound = () => p_2()
            break
        case '+3': actionSound = () => p_3()
            break
        case '+4': actionSound = () => p_4()
            break
        case '+5': actionSound = () => p_5()
            break
        case '+6': actionSound = () => p_6()
            break
        case '+7': actionSound = () => p_7()
            break
        case '+8': actionSound = () => p_8()
            break
        case '+9': actionSound = () => p_9()
            break
        case '+10': actionSound = () => p_10()
            break
        case '-1': actionSound = () => m_1()
            break
        case '-2': actionSound = () => m_2()
            break
        case '-3': actionSound = () => m_3()
            break
        case '-4': actionSound = () => m_4()
            break
        case '-5': actionSound = () => m_5()
            break
        case '-6': actionSound = () => m_6()
            break
        case '-7': actionSound = () => m_7()
            break
        case '-8': actionSound = () => m_8()
            break
        case '-9': actionSound = () => m_9()
            break
        case '-10': actionSound = () => m_10()
            break
        default: actionSound = () => w()
    }

    return <div className={s.action}>{calc}</div>
}