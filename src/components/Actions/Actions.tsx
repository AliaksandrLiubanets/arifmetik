import s from '../Game/Game.module.css'
import React, {FC, memo, useEffect, useState} from 'react'
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
import plus_11 from '../../assets/sounds/actions/+11.mp3'
import plus_12 from '../../assets/sounds/actions/+12.mp3'
import plus_13 from '../../assets/sounds/actions/+13.mp3'
import plus_14 from '../../assets/sounds/actions/+14.mp3'
import plus_15 from '../../assets/sounds/actions/+15.mp3'
import plus_16 from '../../assets/sounds/actions/+16.mp3'
import plus_17 from '../../assets/sounds/actions/+17.mp3'
import plus_18 from '../../assets/sounds/actions/+18.mp3'
import plus_19 from '../../assets/sounds/actions/+19.mp3'
import plus_20 from '../../assets/sounds/actions/+20.mp3'

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
import minus_11 from '../../assets/sounds/actions/-11.mp3'
import minus_12 from '../../assets/sounds/actions/-12.mp3'
import minus_13 from '../../assets/sounds/actions/-13.mp3'
import minus_14 from '../../assets/sounds/actions/-14.mp3'
import minus_15 from '../../assets/sounds/actions/-15.mp3'
import minus_16 from '../../assets/sounds/actions/-16.mp3'
import minus_17 from '../../assets/sounds/actions/-17.mp3'
import minus_18 from '../../assets/sounds/actions/-18.mp3'
import minus_19 from '../../assets/sounds/actions/-19.mp3'
import minus_20 from '../../assets/sounds/actions/-20.mp3'

import wrist from '../../assets/sounds/actions/whistling.mp3'

type Props = {
    actionsCount: number
    timeoutValue: number
    numberComp: number
    actionsArray: string[]
    isSoundOn: boolean
    showInput: (isShowAnswer: boolean) => void
    focusOnElement: (focus: boolean) => void
}

export const Actions: FC<Props> = memo(({
                                            actionsArray,
                                            timeoutValue,
                                            actionsCount,
                                            focusOnElement,
                                            showInput,
                                            isSoundOn
                                        }) => {
        const [calc, setCalc] = useState<string>('')
        const [index, setIndex] = useState<number>(0)

        useEffect(() => {
            if (index < actionsCount) {
                showInput(false)
                let id: ReturnType<typeof setTimeout>
                if (isSoundOn) {
                    actionSound()
                }
                if (index === 0) {
                    id = setTimeout(() => {
                        setCalc(actionsArray[index])
                        setIndex(prevState => prevState + 1)

                    }, 300) // delay only when the first action render does
                }
                if (index > 0) {
                    id = setTimeout(() => {
                        setCalc(actionsArray[index])
                        setIndex(prevState => prevState + 1)

                    }, 1000 * timeoutValue) // interval between every action
                }

                return () => {
                    clearInterval(id)
                }
            }
            if (index === actionsCount) {
                if (isSoundOn) {
                    actionSound()
                }
                showInput(true)
                focusOnElement(true)
            }
        }, [calc, actionsCount, actionsArray, showInput, timeoutValue])

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
        const [p_11] = useSound(plus_11)
        const [p_12] = useSound(plus_12)
        const [p_13] = useSound(plus_13)
        const [p_14] = useSound(plus_14)
        const [p_15] = useSound(plus_15)
        const [p_16] = useSound(plus_16)
        const [p_17] = useSound(plus_17)
        const [p_18] = useSound(plus_18)
        const [p_19] = useSound(plus_19)
        const [p_20] = useSound(plus_20)
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
        const [m_11] = useSound(minus_11)
        const [m_12] = useSound(minus_12)
        const [m_13] = useSound(minus_13)
        const [m_14] = useSound(minus_14)
        const [m_15] = useSound(minus_15)
        const [m_16] = useSound(minus_16)
        const [m_17] = useSound(minus_17)
        const [m_18] = useSound(minus_18)
        const [m_19] = useSound(minus_19)
        const [m_20] = useSound(minus_20)
        const [w] = useSound(wrist)

        let actionSound: () => void
        switch (calc) {
            case '+1':
                actionSound = () => p_1()
                break
            case '+2':
                actionSound = () => p_2()
                break
            case '+3':
                actionSound = () => p_3()
                break
            case '+4':
                actionSound = () => p_4()
                break
            case '+5':
                actionSound = () => p_5()
                break
            case '+6':
                actionSound = () => p_6()
                break
            case '+7':
                actionSound = () => p_7()
                break
            case '+8':
                actionSound = () => p_8()
                break
            case '+9':
                actionSound = () => p_9()
                break
            case '+10':
                actionSound = () => p_10()
                break
            case '+11':
                actionSound = () => p_11()
                break
            case '+12':
                actionSound = () => p_12()
                break
            case '+13':
                actionSound = () => p_13()
                break
            case '+14':
                actionSound = () => p_14()
                break
            case '+15':
                actionSound = () => p_15()
                break
            case '+16':
                actionSound = () => p_16()
                break
            case '+17':
                actionSound = () => p_17()
                break
            case '+18':
                actionSound = () => p_18()
                break
            case '+19':
                actionSound = () => p_19()
                break
            case '+20':
                actionSound = () => p_20()
                break
            case '-1':
                actionSound = () => m_1()
                break
            case '-2':
                actionSound = () => m_2()
                break
            case '-3':
                actionSound = () => m_3()
                break
            case '-4':
                actionSound = () => m_4()
                break
            case '-5':
                actionSound = () => m_5()
                break
            case '-6':
                actionSound = () => m_6()
                break
            case '-7':
                actionSound = () => m_7()
                break
            case '-8':
                actionSound = () => m_8()
                break
            case '-9':
                actionSound = () => m_9()
                break
            case '-10':
                actionSound = () => m_10()
                break
            case '-11':
                actionSound = () => m_11()
                break
            case '-12':
                actionSound = () => m_12()
                break
            case '-13':
                actionSound = () => m_13()
                break
            case '-14':
                actionSound = () => m_14()
                break
            case '-15':
                actionSound = () => m_15()
                break
            case '-16':
                actionSound = () => m_16()
                break
            case '-17':
                actionSound = () => m_17()
                break
            case '-18':
                actionSound = () => m_18()
                break
            case '-19':
                actionSound = () => m_19()
                break
            case '-20':
                actionSound = () => m_20()
                break
            default:
                actionSound = () => w()
        }

        return <div className={s.action}>{calc}</div>
    }
)