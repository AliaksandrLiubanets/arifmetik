import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const HWInitialState = {
    isHWSettings: false,
    isStartHWDoing: false,
    currentUserId: 0,
    homeWork: [
        {
            userId: 1,
            count: {
                rightAnswersAmount: 0,
                numberOfExercises: 5,
                tasks: [{isDone: false}],
                numberComposition: 10,
                speedCount: 1.5,
                actionsAmount: 10,
                isVoiceOn: true
            },
            cards: {
                rightAnswersAmount: 0,
                numberOfExercises: 5,
                tasks: [{isDone: false}],
                numberOfFlashCardsHW: 2,
                firstCardsCompositionHW: 6,
                secondCardsCompositionHW: 5,
                isSpeedOnHW: true,
                speedCardsHW: 1.5,
                maxSpeedHW: 3.5
            }
        },
        {
            userId: 2,
            count: {
                rightAnswersAmount: 0,
                numberOfExercises: 4,
                tasks: [{isDone: false}],
                numberComposition: 10,
                speedCount: 7,
                actionsAmount: 8,
                isVoiceOn: true
            },
            cards: {
                rightAnswersAmount: 0,
                numberOfExercises: 4,
                tasks: [{isDone: false}],
                numberOfFlashCardsHW: 2,
                firstCardsCompositionHW: 6,
                secondCardsCompositionHW: 5,
                isSpeedOnHW: true,
                speedCardsHW: 2.5,
                maxSpeedHW: 8
            }
        }
    ]
}


export const slice = createSlice({
    name: 'homework',
    initialState: HWInitialState,
    reducers: {
        switchHWSettings(state, action: PayloadAction<{ isHWSettings: boolean }>) {
            state.isHWSettings = action.payload.isHWSettings
        },
        setStartHWDoing(state, action: PayloadAction<{ isStartHWDoing: boolean }>) {
            state.isStartHWDoing = action.payload.isStartHWDoing
        },
        setCurrentUserId(state, action: PayloadAction<{ currentUserId: number }>) {
            state.currentUserId = action.payload.currentUserId
        },
        setFirstCardsNumberComp(state, action: PayloadAction<{ firstCardsCompositionHW: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            const cardsComp = action.payload.firstCardsCompositionHW
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.firstCardsCompositionHW = cardsComp
            }
        },
        setSecondCardsNumberComp(state, action: PayloadAction<{ secondCardsCompositionHW: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            const cardsComp = action.payload.secondCardsCompositionHW
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.secondCardsCompositionHW = cardsComp
            }
        },
        setNumberOfCards(state, action: PayloadAction<{ numberOfFlashCardsHW: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            state.homeWork[index].cards.numberOfFlashCardsHW = action.payload.numberOfFlashCardsHW
        },
        setIsSpeedOn(state, action: PayloadAction<{ isSpeedOnHW: boolean }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            state.homeWork[index].cards.isSpeedOnHW = action.payload.isSpeedOnHW
        },
        setCardsSpeed(state, action: PayloadAction<{ speedCardsHW: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            if (action.payload.speedCardsHW > 0) {
                state.homeWork[index].cards.speedCardsHW = action.payload.speedCardsHW
            }
        },
        setCardsNumberOfExercises(state, action: PayloadAction<{ numberOfExercises: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            if (action.payload.numberOfExercises > 2) state.homeWork[index].cards.numberOfExercises = action.payload.numberOfExercises
        },
        makeCardsTasksAmount(state) {
            makeTasksAmount('cards', state)
        },
        addRightAnswerToCardsTasksAmount(state) {
            addRightAnswer('cards', state)
        },
        setCountNumberComp(state, action: PayloadAction<{ numberComposition: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            if (action.payload.numberComposition > 3) state.homeWork[index].count.numberComposition = action.payload.numberComposition
        },
        switchCountVoice(state, action: PayloadAction<{ isVoiceOn: boolean }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            state.homeWork[index].count.isVoiceOn = action.payload.isVoiceOn
        },
        setCountSpeed(state, action: PayloadAction<{ speed: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            if (action.payload.speed > 0) state.homeWork[index].count.speedCount = action.payload.speed
        },
        setCountNumberOfExercises(state, action: PayloadAction<{ numberOfExercises: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            if (action.payload.numberOfExercises > 2) state.homeWork[index].count.numberOfExercises = action.payload.numberOfExercises
        },
        setCountActionsCount(state, action: PayloadAction<{ actionsAmount: number }>) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            if (action.payload.actionsAmount > 1) state.homeWork[index].count.actionsAmount = action.payload.actionsAmount
        },
        makeCountTasksAmount(state) {
            makeTasksAmount('count', state)
        },
        addRightAnswerToCountTasksAmount(state) {
            addRightAnswer('count', state)
        }
    }
})

export const addRightAnswer = (taskType: 'count' | 'cards', state: stateType) => {
    const currentUserId = state.currentUserId
    const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    const tasksArr = state.homeWork[index][taskType].tasks
    const copyTask = [...tasksArr]
    const changingItem = copyTask.find((item: ItemType) => !item.isDone)
    if (changingItem) {
        changingItem.isDone = true
        state.homeWork[index][taskType].rightAnswersAmount += 1 // add 1 more right answer
        state.homeWork[index][taskType].tasks = copyTask
    } else {
        console.warn('no item found')
    }
}
export const makeTasksAmount = (taskType: 'count' | 'cards', state: stateType) => {
    const currentUserId = state.currentUserId
    const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    const item = {isDone: false}
    const tasksArr = [] as ExercisesAmountType
    const numberOfExercises = state.homeWork[index][taskType].numberOfExercises
    for (let i = 1; i <= numberOfExercises; i++) {
        tasksArr.push(item)
    }
    state.homeWork[index][taskType].tasks = tasksArr
}

export const homeworkReducer = slice.reducer
export const {
    switchHWSettings,
    setStartHWDoing,
    setCurrentUserId,
    setFirstCardsNumberComp,
    setSecondCardsNumberComp,
    setNumberOfCards,
    setIsSpeedOn,
    setCardsSpeed,
    setCardsNumberOfExercises,
    makeCardsTasksAmount,
    addRightAnswerToCardsTasksAmount,
    setCountNumberComp,
    switchCountVoice,
    setCountSpeed,
    setCountNumberOfExercises,
    setCountActionsCount,
    makeCountTasksAmount,
    addRightAnswerToCountTasksAmount
} = slice.actions

//types

type stateType = typeof HWInitialState

export type HomeWorkType = {
    userId: number | null
    count: CountTaskType
    cards: CardsTaskType
}
export type ItemType = {
    isDone: boolean
}
export type ExercisesAmountType = ItemType[]

export type CountTaskType = {
    rightAnswersAmount: number,
    numberOfExercises: number,
    tasks: ItemType[],
    speedCount: number
    numberComposition: number
    actionsAmount: number
    isVoiceOn: boolean
}
export type CardsTaskType = {
    rightAnswersAmount: number
    numberOfExercises: number
    tasks: ExercisesAmountType
    speedCardsHW: number
    numberOfFlashCardsHW: number
    firstCardsCompositionHW: number
    secondCardsCompositionHW: number
    isSpeedOnHW: boolean
    maxSpeedHW: number
}

// export type CountGameActionsType = InferActionTypes<typeof countGameActions>