export const getRandomNumber = (number: number, excludeMax?: boolean): number =>
    Math.ceil(Math.random() * (number - (excludeMax ? 1 : 0)))

export const getRandomAction = () => {
    const actions = ['+', '-']
    return actions[Math.floor(Math.random() * actions.length)]
}

export const getStep = (
    numberComp: number,
    prevResult: number,
    prevAction: string
): any => {
    let newResult = prevResult
    let action = prevAction

    do {
        const currentNumber = getRandomNumber(
            numberComp,
            prevResult === numberComp
        )
        const currentAction = getRandomAction()

        newResult =
            currentAction === '+'
                ? prevResult + currentNumber
                : prevResult - currentNumber

        action = `${currentAction}${currentNumber}`
    } while (newResult > numberComp || newResult < 0 || action === prevAction)
    return {newResult, action}
}

export const getArrayOfCalculationsAndAnswer = (actionsCount: number, numberComp: number) => {
    let arrayOfCalculations: string[] = []
    let result = 0
    let prevAction = ''
    for (let i = 0; i < actionsCount; i++) {
        const {newResult, action} = getStep(numberComp, result, prevAction)
        result = newResult
        prevAction = action
        arrayOfCalculations.push(action)
    }
    let answer: number = arrayOfCalculations.reduce((acc, el) => acc + Number(el), 0 )

    return {arrayOfCalculations, answer}
}

export const getRandomCard = (array: string[][], cardsComposition: number) => {
    const arrIndex = Math.floor(Math.random() * cardsComposition)
    console.log('arrIndex:', arrIndex)
    const randomInnerArray = array[arrIndex]
    console.log('randomInnerArray:', randomInnerArray)
    const innerIndex = Math.floor(Math.random() * randomInnerArray.length)
    console.log('innerIndex:', innerIndex)
    console.log('randomCard:', randomInnerArray[innerIndex])
    return randomInnerArray[innerIndex]
}