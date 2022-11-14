import s from '../GameStyles/GameStyles.module.css'
import React, {FC, memo, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {ActionAndSoundType} from '../../store/countGameReducer'
import Sound from 'react-sound'

type Props = {
    setIsShowAnswer: (isShowAnswer: boolean) => void
    focusOnElement: (focus: boolean) => void
}

export const Actions: FC<Props> = memo(({focusOnElement, setIsShowAnswer}) => {
        const [calc, setCalc] = useState<ActionAndSoundType>({action: '', sound: ''})
        const [index, setIndex] = useState<number>(0)

        const {
            actionsArray,
            actionsAmount,
            speed,
            isVoiceOn
        } = useSelector((state: AppRootStateType) => state.count)

        useEffect(() => {
            if (index < actionsAmount) {
                setIsShowAnswer(false)
                let id: ReturnType<typeof setTimeout>
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
            if (index === actionsAmount) {
                let id: ReturnType<typeof setTimeout>
                id = setTimeout(() => {
                    setIsShowAnswer(true)
                    focusOnElement(true)
                }, 1000 * speed) // interval after last action
                return () => {
                    clearInterval(id)
                }
            }
        }, [calc, actionsAmount, actionsArray, setIsShowAnswer, speed, index, focusOnElement])

        return <div className={s.container}>
            {
                isVoiceOn && <Sound url={calc.sound} playStatus={'PLAYING'}/>
            }
            <div className={s.action}>{calc.action}</div>
        </div>
    }
)