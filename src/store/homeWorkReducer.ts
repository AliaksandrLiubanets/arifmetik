import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const HWInitialState = {
    isHWSettings: false,
    isStartHWDoing: false,
    currentUserId: null as number | null,
    homeWork: [
        {
            userId: 1,
            count: {
                numberOfCountExercises: 5,
                numberComposition: 10,
                speedCount: 1.5,
                actionsCount: 10,
                isVoiceOn: true
            },
            cards: {
                rightCardsAnswerCountHW: 0,
                numberOfCardsExercisesHW: 5,
                tasks: [{isDone: false}],
                numberOfFlashCardsHW: 2,
                firstCardsCompositionHW: 6,
                secondCardsCompositionHW: 5,
                isSpeedOnHW: true,
                speedCardsHW: 1.5,
                maxSpeedHW: 3.5,
            }
        },
        {
            userId: 2,
            count: {
                numberOfCountExercises: 5,
                numberComposition: 10,
                speedCount: 7,
                actionsCount: 8,
                isVoiceOn: true
            },
            cards: {
                rightCardsAnswerCountHW: 0,
                numberOfCardsExercisesHW: 5,
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
        setCurrentUserId(state, action: PayloadAction<{ currentUserId: number | null }>) {
            state.currentUserId = action.payload.currentUserId
        },
        setFirstCardsNumberComp(state, action: PayloadAction<{ userId: number | null, firstCardsCompositionHW: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const cardsComp = action.payload.firstCardsCompositionHW
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.firstCardsCompositionHW = cardsComp
            }
        },
        setSecondCardsNumberComp(state, action: PayloadAction<{ userId: number | null, secondCardsCompositionHW: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const cardsComp = action.payload.secondCardsCompositionHW
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.secondCardsCompositionHW = cardsComp
            }
        },
        setNumberOfCards(state, action: PayloadAction<{ userId: number | null, numberOfFlashCardsHW: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.numberOfFlashCardsHW = action.payload.numberOfFlashCardsHW
        },
        setIsSpeedOn(state, action: PayloadAction<{ userId: number | null, isSpeedOnHW: boolean }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.isSpeedOnHW = action.payload.isSpeedOnHW
        },
        setCardsSpeed(state, action: PayloadAction<{ userId: number | null, speedCardsHW: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            if (action.payload.speedCardsHW > 0) {
                state.homeWork[index].cards.speedCardsHW = action.payload.speedCardsHW
            }
        },
        setCardsNumberOfExercises(state, action: PayloadAction<{ userId: number | null, numberOfCardsExercisesHW: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.numberOfCardsExercisesHW = action.payload.numberOfCardsExercisesHW
        },
        makeCardsTasksAmount(state, action: PayloadAction<{ userId: number | null}>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const item = {isDone: false}
            const tasksArr = [] as ExercisesAmountType
            const numberOfCardsExercises = state.homeWork[index].cards.numberOfCardsExercisesHW
            for (let i = 1; i <= numberOfCardsExercises; i++) {
                tasksArr.push(item)
            }
            state.homeWork[index].cards.tasks = tasksArr
        },
        addRightAnswerToCardsTasksAmount(state) {
            const currentUserId = state.currentUserId
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
            const tasksArr = state.homeWork[index].cards.tasks
            const copyTask = [...tasksArr]
            const changingItem = copyTask.find((item: ItemType) => !item.isDone)
            if (changingItem) {
                changingItem.isDone = true
                state.homeWork[index].cards.rightCardsAnswerCountHW += 1 // add 1 more right answer
                state.homeWork[index].cards.tasks = copyTask
            } else {
                console.warn('no item found')
            }
        },
        setCountNumberComp(state, action: PayloadAction<{ userId: number | null, numberComposition: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.numberComposition = action.payload.numberComposition
        },
        switchCountVoice(state, action: PayloadAction<{ userId: number | null, isVoiceOn: boolean }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.isVoiceOn = action.payload.isVoiceOn
        },
        setCountSpeed(state, action: PayloadAction<{ userId: number | null, speedCount: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.speedCount = action.payload.speedCount
        },
        setCountNumberOfExercises(state, action: PayloadAction<{ userId: number | null, numberOfCountExercises: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.numberOfCountExercises = action.payload.numberOfCountExercises
        },
        setCountActionsCount(state, action: PayloadAction<{ userId: number | null, actionsCount: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.actionsCount = action.payload.actionsCount
        },
    }
})


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
    setCountActionsCount
} = slice.actions

//types
export type HomeWorkType = {
    userId: number | null
    count: CountTaskType
    cards: CardsTaskType
}
type ItemType = {
    isDone: boolean
}
export type ExercisesAmountType = ItemType []

export type CountTaskType = {
    numberOfCountExercises: number
    speedCount: number
    numberComposition: number
    actionsCount: number
    isVoiceOn: boolean
}
export type CardsTaskType = {
    rightCardsAnswerCountHW: number
    numberOfCardsExercisesHW: number
    tasks: ExercisesAmountType
    speedCardsHW: number
    numberOfFlashCardsHW: number
    firstCardsCompositionHW: number
    secondCardsCompositionHW: number
    isSpeedOnHW: boolean
    maxSpeedHW: number
}

// export type CountGameActionsType = InferActionTypes<typeof countGameActions>