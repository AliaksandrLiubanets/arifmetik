import React, {FC, useEffect, useState} from 'react'
import { flushSync } from 'react-dom'

type Props = {
    numberComp: number
    timeoutValue: number
    actionsCount: number
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
    console.log({ curResult })

    do {
        const currentNumber = getRandomNumber(
            numberComp,
            curResult === numberComp
        )
        console.log({ currentNumber })
        const currentAction = getRandomAction()
        console.log({ currentNumber, currentAction })

        newResult =
            currentAction === '+'
                ? curResult + currentNumber
                : curResult - currentNumber

        action = `${currentAction}${currentNumber}`
    } while (newResult > numberComp || newResult < 0 || action === prevAction)
    return { newResult, action }
}

export const Game: FC<Props> = ({
                                    numberComp,
                                    timeoutValue,
                                    actionsCount,
                                    restart,
                                }) => {
    const [calc, setCalc] = useState('')
    const [answer, setAnswer] = useState(0)
    const [inputAnswer, setInputAnswer] = useState<number>(0)
    const [showInput, setShowInput] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
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
            const { newResult, action } = getStep(
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
    }, [restart])

    return (
        <div>
            <div style={{fontSize: '150px', fontWeight: 'bold', color: 'blue'}}>{calc}</div>
            {showInput && (
                <>
                    <input
                        type='number'
                        value={inputAnswer}
                        onChange={(e) =>
                            setInputAnswer(e.currentTarget.valueAsNumber)
                        }
                    />
                    <button onClick={() => setShowAnswer(true)}>submit</button>
                </>
            )}
            {showAnswer && <div>{answer}</div>}
        </div>
    )
}