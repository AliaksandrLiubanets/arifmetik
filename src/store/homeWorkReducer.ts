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
                numberOfCardsExercises: 5,
                numberOfFlashCards: 2,
                firstCardsComposition: 6,
                secondCardsComposition: 5,
                isSpeedOn: true,
                speedCards: 1.5
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
                numberOfCardsExercises: 5,
                numberOfFlashCards: 2,
                firstCardsComposition: 6,
                secondCardsComposition: 5,
                isSpeedOn: true,
                speedCards: 2.5
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
        setFirstCardsNumberComp(state, action: PayloadAction<{ userId: number | null, firstCardsComposition: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const cardsComp = action.payload.firstCardsComposition
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.firstCardsComposition = cardsComp
            }
        },
        setSecondCardsNumberComp(state, action: PayloadAction<{ userId: number | null, secondCardsComposition: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            const cardsComp = action.payload.secondCardsComposition
            if (cardsComp > 2 && cardsComp < 11) {
                state.homeWork[index].cards.secondCardsComposition = cardsComp
            }
        },
        setNumberOfCards(state, action: PayloadAction<{ userId: number | null, numberOfFlashCards: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.numberOfFlashCards = action.payload.numberOfFlashCards
        },
        setIsSpeedOn(state, action: PayloadAction<{ userId: number | null, isSpeedOn: boolean }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.isSpeedOn = action.payload.isSpeedOn
        },
        setCardsSpeed(state, action: PayloadAction<{ userId: number | null, speedCards: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.speedCards = action.payload.speedCards
        },
        setCardsNumberOfExercises(state, action: PayloadAction<{ userId: number | null, numberOfCardsExercises: number }>) {
            const index = state.homeWork.findIndex((data: HomeWorkType) => data.userId === action.payload.userId)
            state.homeWork[index].cards.numberOfCardsExercises = action.payload.numberOfCardsExercises
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
        }
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
export type CountTaskType = {
    numberOfCountExercises: number
    speedCount: number
    numberComposition: number
    actionsCount: number
    isVoiceOn: boolean
}
export type CardsTaskType = {
    numberOfCardsExercises: number
    speedCards: number
    numberOfFlashCards: number
    firstCardsComposition: number
    secondCardsComposition: number
    isSpeedOn: boolean
}

// export type CountGameActionsType = InferActionTypes<typeof countGameActions>