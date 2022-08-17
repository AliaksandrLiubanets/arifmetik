import React, {ChangeEvent, FC, FocusEvent, KeyboardEvent, useEffect, useState} from 'react'
import {flushSync} from 'react-dom'
import s from '../Game/Game.module.css'
import {Answer} from '../Answer/Answer'
import {ButtonNext} from '../ButtonNext/ButtonNext'
import useSound from 'use-sound'
import right_sound from '../../assets/sounds/right_answer_sound.mp3'
import wrong_sound from '../../assets/sounds/wrong_answer_sound.mp3'
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
    numberComp: number
    timeoutValue: number
    actionsCount: number
    setIsStarted: (isStarted: boolean) => void
    setRestart: (restart: boolean) => void
    restart: boolean
}
const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))

const getRandomNumber = (number: number, excludeMax?: boolean): number =>
    Math.ceil(Math.random() * (number - (excludeMax ? 1 : 0)))

const getRandomAction = () => {
    const actions = ['+', '-']
    return actions[Math.floor(Math.random() * actions.length)]
}

const getStep = (
    numberComp: number,
    curResult: number,
    prevAction: string
): any => {
    let newResult = 0
    let action = ''

    do {
        const currentNumber = getRandomNumber(
            numberComp,
            curResult === numberComp
        )
        const currentAction = getRandomAction()

        newResult =
            currentAction === '+'
                ? curResult + currentNumber
                : curResult - currentNumber

        action = `${currentAction}${currentNumber}`
    } while (newResult > numberComp || newResult < 0 || action === prevAction)
    return {newResult, action}
}

export const Game: FC<Props> = ({
                                    numberComp,
                                    timeoutValue,
                                    actionsCount,
                                    setIsStarted,
                                    setRestart,
                                    restart
                                }) => {
    const [calc, setCalc] = useState('')
    const [answer, setAnswer] = useState(0)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [showInput, setShowInput] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [focus, setFocus] = useState(true)

    const [right] = useSound(right_sound)
    const [wrong] = useSound(wrong_sound)
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

    useEffect(() => {
        actionSound()
    }, [calc])

    useEffect(() => {
        flushSync(() => {
            setAnswer(0)
            setShowAnswer(false)
            setShowInput(false)
            setInputAnswer(0)
        })
        let result = 0
        let prevAction = ''
        const task = async (i: number) => {
            const {newResult, action} = getStep(
                numberComp,
                result,
                prevAction
            )

            result = newResult
            prevAction = action
            setCalc(action)
            if (i === actionsCount - 1) {
                setShowInput(true)
                setAnswer(result)
            }
            await timer(1000 * timeoutValue)
        }

        const loop = async () => {
            for (let i = 0; i < actionsCount; i++) {
                await task(i)
            }
        }
        loop()
        setFocus(true)
    }, [restart])



    const answerSound = () => inputAnswer === answer ? right() : wrong()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputAnswer(e.currentTarget.valueAsNumber)
    const handleBackToSettings = () => setIsStarted(false)
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            setShowAnswer(true)
            setFocus( false)
            answerSound()
        }
    }
    const nextExercise = () => {
        setRestart(!restart)
        setFocus( false)
    }


    return (
        <div className={s.game}>
            {!showAnswer
                ? <div className={s.action}>{calc}</div>
                : <Answer answer={answer} inputAnswer={inputAnswer}/>
            }
            {showInput &&
            <div className={s.answer_input}>
                <button onClick={handleBackToSettings}>Назад</button>
                {focus ?
                <input
                    type="number"
                    value={inputAnswer}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    autoFocus={focus}
                    onKeyPress={handleEnterPress}
                    />
                    : <ButtonNext isOnFocus={!focus} callback={nextExercise}/>
                }

            </div>
            }
        </div>
    )
}

