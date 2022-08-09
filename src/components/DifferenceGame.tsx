import React, {FC, useEffect, useState, memo} from 'react'

type GamePropsType = {
    numberOfActions: number
    numberComposition: number
    speed: number
    restart: boolean
}

const getRandomInt = (number: number) => {
    return Math.floor(Math.random() * number)
}

export const DifferenceGame: FC<GamePropsType> = memo(({numberOfActions, numberComposition, speed, restart}) => {
        const [numberInAction, setNumberInAction] = useState<number>(0)
        const [result, setResult] = useState<number>(numberComposition)
        const [currentActionsCount, setCurrentActionsCount] = useState<number>(0)

        useEffect(() => {
            let id = setInterval(numberInActionMaker, speed * 1000)

            if (result - numberInAction >= 0 && currentActionsCount < numberOfActions) {
                setResult(prevState => prevState - numberInAction)
            }
            if (currentActionsCount < numberOfActions) {
                setCurrentActionsCount(prevState => prevState + 1)
            }
            return () => {
                clearInterval(id)
            }
        }, [restart, numberInAction, numberOfActions])

        const numberInActionMaker = () => {
            let currentNumber: number = getRandomInt(numberComposition)
            if (currentActionsCount < numberOfActions) {
                setNumberInAction(currentNumber)
            }
            return
        }


        return <div>
            <div>Действие: {numberInAction}</div>
            <div>Разность: {result}</div>
            <div>Количество действий: {currentActionsCount}</div>
            <div>

            </div>
        </div>
    }
)