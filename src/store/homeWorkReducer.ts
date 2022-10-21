import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const HWInitialState = {
    homeWork: [
        {
            userId: 1,
            count: {
                numberOfExercises: 5,
                numberComposition: 10,
                speed: 1.5,
                actionsCount: 10
            },
            cards: {
                numberOfExercises: 5,
                numberOfFlashCards: 2,
                firstCardsComposition: 6,
                secondCardsComposition: 5,
                isSpeedOn: true,
                speed: 1.5
            },
        },
        {
            userId: 2,
            count: {
                numberOfExercises: 5,
                numberComposition: 10,
                speed: 7,
                actionsCount: 8
            },
            cards: {
                numberOfExercises: 5,
                numberOfFlashCards: 2,
                firstCardsComposition: 6,
                secondCardsComposition: 5,
                isSpeedOn: true,
                speed: 2.5
            },
        }
    ]
}


export const slice = createSlice({
    name: 'homework',
    initialState: HWInitialState,
    reducers: {
        setFirstCardsNumberComp(state, action: PayloadAction<{ userId: number, firstCardsComposition: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const cardsComp = action.payload.firstCardsComposition
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.firstCardsComposition = cardsComp
            }
        },
        setSecondCardsNumberComp(state, action: PayloadAction<{ userId: number, secondCardsComposition: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const cardsComp = action.payload.secondCardsComposition
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.secondCardsComposition = cardsComp
            }
        },
        setIsSpeedOn(state, action: PayloadAction<{ userId: number, isSpeedOn: boolean }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.isSpeedOn = action.payload.isSpeedOn
        },
        setCardsSpeed(state, action: PayloadAction<{ userId: number, speed: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.speed = action.payload.speed
        },
        setCardsNumberOfExercises(state, action: PayloadAction<{ userId: number, numberOfexercises: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.numberOfExercises = action.payload.numberOfexercises
        },
        setCountNumberComp(state, action: PayloadAction<{ userId: number, numberComposition: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.numberComposition = action.payload.numberComposition
        },
        setCountSpeed(state, action: PayloadAction<{ userId: number, speed: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.speed = action.payload.speed
        },
        setCountNumberOfExercises(state, action: PayloadAction<{ userId: number, numberOfexercises: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.numberOfExercises = action.payload.numberOfexercises
        },
        setCountActionsCount(state, action: PayloadAction<{ userId: number, actionsCount: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].count.actionsCount = action.payload.actionsCount
        },
    }
})


export const homeworkReducer = slice.reducer
export const {
    setFirstCardsNumberComp,
    setCardsSpeed,
    setCardsNumberOfExercises,
    setCountNumberComp,
    setCountSpeed,
    setCountNumberOfExercises,
    setCountActionsCount,
} = slice.actions

//types
export type HomeWorkType = {
    userId: number
    count: CountTaskType
    cards: CardsTaskType

}
export type CountTaskType = {
    numberOfExercises: number
    speed: number
    numberComposition: number
    actionsCount: number
}
export type CardsTaskType = {
    numberOfExercises: number
    speed: number
    numberOfFlashCards: number
    firstCardsComposition: number
    secondCardsComposition: number
    isSpeedOn: boolean
}

// export type CountGameActionsType = InferActionTypes<typeof countGameActions>