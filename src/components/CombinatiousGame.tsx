import React, {FC, useEffect, useState, memo} from 'react'

type GamePropsType = {
    actionsCount: number
    numberComposition: number
    speed: number
    setIsGame: (isGame: boolean) => void
}

const getRandomNumber = (number: number) => {
    let randomNumber = Math.floor(Math.random() * number)
    while (randomNumber === 0) {
        randomNumber = Math.floor(Math.random() * number)
    }
    return randomNumber
}
const getRandomAction = (number: number) => {
    return Math.floor(Math.random() * number)
}

export const CombinasiousGame: FC<GamePropsType> = memo(({actionsCount, numberComposition, speed, setIsGame}) => {
        const [numberInAction, setNumberInAction] = useState<number>(getRandomNumber(numberComposition))
        const [result, setResult] = useState<number>(0)
        const [currentActionsCount, setCurrentActionsCount] = useState<number>(0)
        const [operator, setOperator] = useState<number>(1)
        const [actionsArray, setActionsArray] = useState<string[]>([''])


        const setState = () => {
            console.log({currentActionsCount, result})
            if (currentActionsCount === 0) {
                setResult(prevState => prevState + numberInAction)
                setCurrentActionsCount(prevState => {
                    console.log({prevState})
                    return prevState + 1
                })
                setActionsArray(actionsArray => [...actionsArray, `+${numberInAction}`])
                return
            }

            // random number +: 1 or -: 0
            let currentOperator: number = getRandomAction(2)

            if (result === numberComposition) {
                currentOperator = 0
            }

            const generateCurrentNumber = () => {
                // avoid similar numbers in actions:
                while (currentNumber === numberInAction) {
                    currentNumber = getRandomNumber(numberComposition)
                }
                return currentNumber
            }

            let currentNumber: number = getRandomNumber(numberComposition)

            generateCurrentNumber()

            const setData = (currentOperator: 1 | 0) => {
                if (currentOperator === 1 && currentActionsCount < actionsCount) {
                    setOperator(currentOperator)
                    setNumberInAction(currentNumber)
                    setActionsArray(actionsArray => [...actionsArray, `+${currentNumber}`])
                    setCurrentActionsCount(prevState => prevState + 1)
                    setResult(prevState => prevState + currentNumber)
                }
                if (currentOperator === 0 && currentActionsCount < actionsCount) {
                    setOperator(currentOperator)
                    setNumberInAction(currentNumber)
                    setActionsArray(actionsArray => [...actionsArray, `-${currentNumber}`])
                    setCurrentActionsCount(prevState => {
                        console.log({prevState})
                        return prevState + 1
                    })
                    setResult(prevState => prevState - currentNumber)
                }
            }

            const max = 3
            if (currentOperator === 0) {
                let i = 0
                while ((result - currentNumber) < 0) {
                    if (i === max) {
                        currentNumber = generateCurrentNumber()
                        if (result - currentNumber >= 0) {
                            setData(0)
                        } else {
                            currentNumber = 1
                            currentOperator = 1
                            if (result + currentNumber <= numberComposition) {
                                setData(1)
                            }
                        }
                        i = 0
                    } else {
                        currentNumber = generateCurrentNumber()
                        i++
                    }
                }
                if (result - currentNumber >= 0) {
                    setData(0)
                }
            }
            if (currentOperator === 1) {
                let i = 0
                console.log((result + currentNumber) > numberComposition)
                while ((result + currentNumber) > numberComposition) {
                    if (i === max) {
                        currentNumber = generateCurrentNumber()
                        if (result + currentNumber <= numberComposition) {
                            setData(1)
                        } else {
                            currentNumber = 1
                            currentOperator = 0
                            if (result - currentNumber >= 0) {
                                setData(0)
                            }
                        }
                        i = 0
                    } else {
                        currentNumber = generateCurrentNumber()
                        i++
                    }
                }
                if (result + currentNumber <= numberComposition) {
                    setData(1)
                }
            }
        }

        useEffect(() => {
            console.log('useEffect')

                let id = setInterval(setState, speed * 1000)

                return () => {
                    clearInterval(id)
                }
            }, [result, numberComposition, speed]
        )


        let actionSign: string
        if (operator === 1) {
            actionSign = '+'
        } else {
            actionSign = '-'
        }

        return <div>
            <div>Действие: {actionSign}{numberInAction}</div>
            <div>Ответ: {result}</div>
            <div>Количество действий: {currentActionsCount}</div>
            <div>Действия в примере:
                {
                    actionsArray.map((action, ind) => <span key={ind}>{action} </span>)
                }
            </div>
            <div>
                <button onClick={() => setIsGame(false)}>В настройки</button>
            </div>
        </div>
    }
)