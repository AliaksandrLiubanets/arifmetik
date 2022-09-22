import s from '../Count/Game.module.css'
import React, {FC, memo, useCallback, useEffect, useState} from 'react'
import useSound from 'use-sound'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import ReactAudioPlayer from 'react-audio-player'

type Props = {
    showInput: (isShowAnswer: boolean) => void
    focusOnElement: (focus: boolean) => void
}

export const Actions: FC<Props> = memo(({focusOnElement, showInput}) => {
        const [calc, setCalc] = useState<string>('')
        const [index, setIndex] = useState<number>(0)
        const [soundStr, setSoundStr] = useState<string>('')

        const {
            actionsArray,
            actionsCount,
            speed,
            isSoundOn
        } = useSelector((state: AppRootStateType) => state.count)

        let actionSound: () => void
        // switch (calc) {
        //     case '+1':
        //         actionSound = () => p_1()
        //         break
        //     case '+2':
        //         actionSound = () => p_2()
        //         break
        //     case '+3':
        //         actionSound = () => p_3()
        //         break
        //     case '+4':
        //         actionSound = () => p_4()
        //         break
        //     case '+5':
        //         actionSound = () => p_5()
        //         break
        //     case '+6':
        //         actionSound = () => p_6()
        //         break
        //     case '+7':
        //         actionSound = () => p_7()
        //         break
        //     case '+8':
        //         actionSound = () => p_8()
        //         break
        //     case '+9':
        //         actionSound = () => p_9()
        //         break
        //     case '+10':
        //         actionSound = () => p_10()
        //         break
        //     case '+11':
        //         actionSound = () => p_11()
        //         break
        //     case '+12':
        //         actionSound = () => p_12()
        //         break
        //     case '+13':
        //         actionSound = () => p_13()
        //         break
        //     case '+14':
        //         actionSound = () => p_14()
        //         break
        //     case '+15':
        //         actionSound = () => p_15()
        //         break
        //     case '+16':
        //         actionSound = () => p_16()
        //         break
        //     case '+17':
        //         actionSound = () => p_17()
        //         break
        //     case '+18':
        //         actionSound = () => p_18()
        //         break
        //     case '+19':
        //         actionSound = () => p_19()
        //         break
        //     case '+20':
        //         actionSound = () => p_20()
        //         break
        //     case '-1':
        //         actionSound = () => m_1()
        //         break
        //     case '-2':
        //         actionSound = () => m_2()
        //         break
        //     case '-3':
        //         actionSound = () => m_3()
        //         break
        //     case '-4':
        //         actionSound = () => m_4()
        //         break
        //     case '-5':
        //         actionSound = () => m_5()
        //         break
        //     case '-6':
        //         actionSound = () => m_6()
        //         break
        //     case '-7':
        //         actionSound = () => m_7()
        //         break
        //     case '-8':
        //         actionSound = () => m_8()
        //         break
        //     case '-9':
        //         actionSound = () => m_9()
        //         break
        //     case '-10':
        //         actionSound = () => m_10()
        //         break
        //     case '-11':
        //         actionSound = () => m_11()
        //         break
        //     case '-12':
        //         actionSound = () => m_12()
        //         break
        //     case '-13':
        //         actionSound = () => m_13()
        //         break
        //     case '-14':
        //         actionSound = () => m_14()
        //         break
        //     case '-15':
        //         actionSound = () => m_15()
        //         break
        //     case '-16':
        //         actionSound = () => m_16()
        //         break
        //     case '-17':
        //         actionSound = () => m_17()
        //         break
        //     case '-18':
        //         actionSound = () => m_18()
        //         break
        //     case '-19':
        //         actionSound = () => m_19()
        //         break
        //     case '-20':
        //         actionSound = () => m_20()
        //         break
        //     default:
        //         actionSound = () => w()
        // }

        // const getActionSoundStrAccordingActionStr = (calc: string) => {
        //     let sound: string
        //     switch (calc) {
        //         case '+1':
        //             sound = plus_1
        //             break
        //         case '+2':
        //             sound = plus_2
        //             break
        //         case '+3':
        //             sound = plus_3
        //             break
        //         case '+4':
        //             sound = plus_4
        //             break
        //         case '+5':
        //             sound = plus_5
        //             break
        //         case '+6':
        //             sound = plus_6
        //             break
        //         case '+7':
        //             sound = plus_7
        //             break
        //         case '+8':
        //             sound = plus_8
        //             break
        //         case '+9':
        //             sound = plus_9
        //             break
        //         case '+10':
        //             sound = plus_10
        //             break
        //         case '+11':
        //             sound = plus_11
        //             break
        //         case '+12':
        //             sound = plus_12
        //             break
        //         case '+13':
        //             sound = plus_13
        //             break
        //         case '+14':
        //             sound = plus_14
        //             break
        //         case '+15':
        //             sound = plus_15
        //             break
        //         case '+16':
        //             sound = plus_16
        //             break
        //         case '+17':
        //             sound = plus_17
        //             break
        //         case '+18':
        //             sound = plus_18
        //             break
        //         case '+19':
        //             sound = plus_19
        //             break
        //         case '+20':
        //             sound = plus_20
        //             break
        //         case '-1':
        //             sound = minus_1
        //             break
        //         case '-2':
        //             sound = minus_2
        //             break
        //         case '-3':
        //             sound = minus_3
        //             break
        //         case '-4':
        //             sound = minus_4
        //             break
        //         case '-5':
        //             sound = minus_5
        //             break
        //         case '-6':
        //             sound = minus_6
        //             break
        //         case '-7':
        //             sound = minus_7
        //             break
        //         case '-8':
        //             sound = minus_8
        //             break
        //         case '-9':
        //             sound = minus_9
        //             break
        //         case '-10':
        //             sound = minus_10
        //             break
        //         case '-11':
        //             sound = minus_11
        //             break
        //         case '-12':
        //             sound = minus_12
        //             break
        //         case '-13':
        //             sound = minus_13
        //             break
        //         case '-14':
        //             sound = minus_14
        //             break
        //         case '-15':
        //             sound = minus_15
        //             break
        //         case '-16':
        //             sound = minus_16
        //             break
        //         case '-17':
        //             sound = minus_17
        //             break
        //         case '-18':
        //             sound = minus_18
        //             break
        //         case '-19':
        //             sound = minus_19
        //             break
        //         case '-20':
        //             sound = minus_20
        //             break
        //         default:
        //             sound = ''
        //     }
        //     return sound
        // }
        useEffect(() => {
            setSoundStr(actionsArray[index].sound)
        }, [calc])

        const [sound] = useSound(soundStr)
        actionSound = useCallback(() => sound(), [soundStr, calc])

        useEffect(() => {
            if (index < actionsCount) {
                showInput(false)
                let id: ReturnType<typeof setTimeout>
                // if (isSoundOn) {
                    // actionSound()
                // }
                if (index === 0) {
                    id = setTimeout(() => {
                        setCalc(actionsArray[index].action)
                        setIndex(prevState => prevState + 1)

                    }, 300) // delay only when the first action renders
                }
                if (index > 0) {
                    id = setTimeout(() => {
                        setCalc(actionsArray[index].action)
                        setIndex(prevState => prevState + 1)

                    }, 1000 * speed) // interval between every action
                }
                return () => {
                    clearInterval(id)
                }
            }
            if (index === actionsCount) {
                // if (isSoundOn) {
                    // actionSound()
                // }
                showInput(true)
                focusOnElement(true)
            }
        }, [calc, actionsCount, actionsArray, showInput, speed])


        return <div className={s.container}>
            <div className={s.player}>
                <ReactAudioPlayer
                    controls={true}
                    src={actionsArray[index].sound}
                    onPlay={actionSound}
                />
            </div>
            {/*<div className={s.action}>{calc}</div>*/}
        </div>
    }
)