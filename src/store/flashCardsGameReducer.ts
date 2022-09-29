import {getRandomCard} from '../utils/helper'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const multiplicityOfFlashCards = [
    /* 1 */ ['1'],
    /* 2 */ ['2'],
    /* 3 */ ['3', '2_1', '1_2'],
    /* 4 */ ['4', '2_2', '3_1', '1_3'],
    /* 5 */ ['4_1', '1_4', '2_3', '3_2'],
    /* 6 */ ['3_3', '2_2_2', '2_4', '4_2'],
    /* 7 */ ['3_4', '4_3', '3_2_2', '2_3_2', '2_2_3'],
    /* 8 */ ['4_4', '2_3_3', '3_2_3', '3_3_2', '2_2_4', '2_4_2', '4_2_2'],
    /* 9 */ ['3_3_3', '2_3_4', '2_4_3', '3_2_4', '3_4_2', '4_2_3', '4_3_2'],
    /* 10*/ ['4_4_2', '4_3_3', '4_2_4', '3_3_4', '3_3_2_2', '3_2_3_2', '3_2_2_3', '2_3_3_2', '2_3_2_3']
]

const initialState = {
    firstCardsComposition: 6 as number,
    secondCardsComposition: 4 as number,
    isSpeedOn: false,
    speed: 1,
    actionsCount: 2,
    isSoundOn: true,
    firstCardsArray: multiplicityOfFlashCards,
    secondCardsArray: multiplicityOfFlashCards,
    firstFlashCard: '',
    secondFlashCard: '',
    numberOfFlashCards: 1,
    // answer: 0,
    // isShowAnswer: false,
    // isShowInput: false
}

export const slice = createSlice({
    name: 'flash',
    initialState: initialState,
    reducers: {
        setFirstCardsComp(state, action: PayloadAction<{ firstCardsComposition: number }>) {
            const cardsComp = action.payload.firstCardsComposition
            if (cardsComp > 2 && cardsComp < 11) {
                state.firstCardsComposition = cardsComp
            }
        },
        setSecondCardsComp(state, action: PayloadAction<{ secondCardsComposition: number }>) {
            const cardsComp = action.payload.secondCardsComposition
            if (cardsComp > 2 && cardsComp < 11) {
                state.secondCardsComposition = cardsComp
            }
        },
        setIsSpeedOn(state, action: PayloadAction<{ isSpeedOn: boolean }>) {
            state.isSpeedOn = action.payload.isSpeedOn
        },
        setSpeed(state, action: PayloadAction<{ speed: number }>) {
            if (action.payload.speed >= 0) {
                state.speed = action.payload.speed
            }
        },
        setActionsCount(state, action: PayloadAction<{ actionsCount: number }>) {
            state.actionsCount = action.payload.actionsCount
        },
        setNumberOfFlashCards(state, action: PayloadAction<{ numberOfFlashCards: number }>) {
            state.numberOfFlashCards = action.payload.numberOfFlashCards
        },
        setCard(state) {
            state.firstFlashCard = getRandomCard(state.firstCardsArray, state.firstCardsComposition)
            if (state.numberOfFlashCards === 2) {
                state.secondFlashCard = getRandomCard(state.secondCardsArray, state.secondCardsComposition)
            }
        },
    }
})


export const flashCardsGameReducer = slice.reducer
export const {
    setFirstCardsComp,
    setSecondCardsComp,
    setNumberOfFlashCards,
    setIsSpeedOn,
    setSpeed,
    setActionsCount,
    setCard
} = slice.actions

//types
export type CountGameType = typeof initialState
// export type CountGameActionsType = InferActionTypes<typeof countGameActions>