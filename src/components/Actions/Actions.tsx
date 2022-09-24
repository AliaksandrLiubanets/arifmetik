import s from '../Count/Game.module.css'
import React, {FC, memo, useCallback, useEffect, useState} from 'react'
import useSound from 'use-sound'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import ReactAudioPlayer from 'react-audio-player'
import plus_2 from '../../assets/sounds/actions/+2.mp3'
import {ActionAndSoundType} from '../../store/countGameReducer'
import Sound from 'react-sound'

type Props = {
    showInput: (isShowAnswer: boolean) => void
    focusOnElement: (focus: boolean) => void
}

export const Actions: FC<Props> = memo(({focusOnElement, showInput}) => {
        const [calc, setCalc] = useState<ActionAndSoundType>({action: '', sound: ''})
        const [index, setIndex] = useState<number>(0)
        // const [soundStr, setSoundStr] = useState<string>('')

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


        // const [sound] = useSound(soundStr)
        // const [sound] = useSound(calc.sound)
        // const [ss] = useSound(plus_2)
        // actionSound = useCallback(() => sound(), [calc])

        useEffect(() => {
            if (index < actionsCount) {
                showInput(false)
                let id: ReturnType<typeof setTimeout>
                // if (isSoundOn) {
                //     actionSound()
                // }
                if (index === 0) {
                    id = setTimeout(() => {
                        setCalc(actionsArray[index])
                        setIndex(prevState => prevState + 1)

                    }, 300) // delay only when the first action renders
                }
                if (index > 0) {
                    id = setTimeout(() => {
                        setCalc(actionsArray[index])
                        setIndex(prevState => prevState + 1)

                    }, 1000 * speed) // interval between every action
                }
                return () => {
                    clearInterval(id)
                }
            }
            if (index === actionsCount) {
                // if (isSoundOn) {
                //     actionSound()
                // }
                showInput(true)
                focusOnElement(true)
            }
        }, [calc, actionsCount, actionsArray, showInput, speed])


        return <div className={s.container}>
            <Sound
                url={calc.sound}
                playStatus={'PLAYING'}

            />
            <div className={s.player}>
                {/*<ReactAudioPlayer*/}
                {/*    controls={true}*/}
                {/*    src={calc.sound}*/}
                {/*    preload={'auto'}*/}
                {/*    onPlay={actionSound}*/}
                {/*/>*/}
            </div>
            {/*<button onClick={actionSound}>Sound</button>*/}
            <div className={s.action}>{calc.action}</div>
        </div>
    }
)