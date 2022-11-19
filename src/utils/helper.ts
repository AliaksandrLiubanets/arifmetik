import {ActionAndSoundType} from '../store/countGameReducer'
import {getActionSoundStrAccordingActionStr} from './getArrayWithActionsAndSound'

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
    let arrayOfCalculations: ActionAndSoundType[] = []
    let result = 0
    let prevAction = ''
    let sound: string
    let actionAndSound: ActionAndSoundType

    for (let i = 0; i < actionsCount; i++) {
        const {newResult, action} = getStep(numberComp, result, prevAction)
        result = newResult
        prevAction = action
        sound = getActionSoundStrAccordingActionStr(action)
        actionAndSound = {action, sound}
        arrayOfCalculations.push(actionAndSound)
    }
    let answer: number = arrayOfCalculations.reduce((acc, el) => acc + Number(el.action), 0)

    return {arrayOfCalculations, answer}
}

export const getRandomCard = (array: string[][], cardsComposition: number) => {
    const arrIndex = Math.floor(Math.random() * cardsComposition)
    const randomInnerArray = array[arrIndex]
    const innerIndex = Math.floor(Math.random() * randomInnerArray.length)
    return randomInnerArray[innerIndex]
}


export const makeAnswerFromFlashCardOrCount = (typeOfGame: string, countAnswer: number, cardAnswer: number) => {
    if (typeOfGame === '/homework/count' || typeOfGame === '/count') {
        return countAnswer
    } else {
        return cardAnswer
    }
}

export const convertStringPictureToNumber = (str: string) => {
    let digitalValueOfPicture: number
    switch (str) {
        case '1':
            digitalValueOfPicture = 1
            break
        case '2':
            digitalValueOfPicture = 2
            break
        case '3':
            digitalValueOfPicture = 3
            break
        case '2_1':
            digitalValueOfPicture = 3
            break
        case '1_2':
            digitalValueOfPicture = 3
            break
        case '2_2':
            digitalValueOfPicture = 4
            break
        case '3_1':
            digitalValueOfPicture = 4
            break
        case '1_3':
            digitalValueOfPicture = 4
            break
        case '4':
            digitalValueOfPicture = 4
            break
        case '4_1':
            digitalValueOfPicture = 5
            break
        case '1_4':
            digitalValueOfPicture = 5
            break
        case '2_3':
            digitalValueOfPicture = 5
            break
        case '3_2':
            digitalValueOfPicture = 5
            break
        case '3_3':
            digitalValueOfPicture = 6
            break
        case '2_2_2':
            digitalValueOfPicture = 6
            break
        case '2_4':
            digitalValueOfPicture = 6
            break
        case '4_2':
            digitalValueOfPicture = 6
            break
        case '3_4':
            digitalValueOfPicture = 7
            break
        case '4_3':
            digitalValueOfPicture = 7
            break
        case '3_2_2':
            digitalValueOfPicture = 7
            break
        case '2_3_2':
            digitalValueOfPicture = 7
            break
        case '2_2_3':
            digitalValueOfPicture = 7
            break
        case '4_4':
            digitalValueOfPicture = 8
            break
        case '2_3_3':
            digitalValueOfPicture = 8
            break
        case '3_2_3':
            digitalValueOfPicture = 8
            break
        case '3_3_2':
            digitalValueOfPicture = 8
            break
        case '2_2_4':
            digitalValueOfPicture = 8
            break
        case '2_4_2':
            digitalValueOfPicture = 8
            break
        case '4_2_2':
            digitalValueOfPicture = 8
            break
        case '3_3_3':
            digitalValueOfPicture = 9
            break
        case '2_3_4':
            digitalValueOfPicture = 9
            break
        case '2_4_3':
            digitalValueOfPicture = 9
            break
        case '3_2_4':
            digitalValueOfPicture = 9
            break
        case '3_4_2':
            digitalValueOfPicture = 9
            break
        case '4_2_3':
            digitalValueOfPicture = 9
            break
        case '4_3_2':
            digitalValueOfPicture = 9
            break
        case '4_4_2':
            digitalValueOfPicture = 10
            break
        case '4_3_3':
            digitalValueOfPicture = 10
            break
        case '4_2_4':
            digitalValueOfPicture = 10
            break
        case '3_3_4':
            digitalValueOfPicture = 10
            break
        case '3_3_2_2':
            digitalValueOfPicture = 10
            break
        case '3_2_3_2':
            digitalValueOfPicture = 10
            break
        case '3_2_2_3':
            digitalValueOfPicture = 10
            break
        case '2_3_3_2':
            digitalValueOfPicture = 10
            break
        case '2_3_2_3':
            digitalValueOfPicture = 10
            break

        default:
            digitalValueOfPicture = 0
    }
    return digitalValueOfPicture
}
