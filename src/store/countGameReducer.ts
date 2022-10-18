import {getArrayOfCalculationsAndAnswer} from '../utils/helper'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type ActionAndSoundType = {
    action: string
    sound: string
}

const initialState = {
    numberComposition: 10 as number,
    speed: 1,
    actionsCount: 2,
    isSoundOn: true,
    actionsArray: [] as ActionAndSoundType[],
    actionsAndSoundsArray: [] as ActionAndSoundType[],
    answer: 0,
    // isShowAnswer: false,
    // isShowInput: false
}

export const slice = createSlice({
    name: 'count',
    initialState: initialState,
    reducers: {
        setNumberComp(state, action: PayloadAction<{ numberComposition: number }>) {
            state.numberComposition = action.payload.numberComposition
        },
        setSpeed(state, action: PayloadAction<{ speed: number }>) {
            state.speed = action.payload.speed
        },
        setActionsCount(state, action: PayloadAction<{ actionsCount: number }>) {
            state.actionsCount = action.payload.actionsCount
        },
        switchSound(state, action: PayloadAction<{ isSoundOn: boolean }>) {
            state.isSoundOn = action.payload.isSoundOn
        },
        setActionsArrayAndAnswer(state) {
            const {
                arrayOfCalculations,
                answer
            } = getArrayOfCalculationsAndAnswer(state.actionsCount, state.numberComposition)
            state.actionsArray = arrayOfCalculations
            state.answer = answer
        },
    }
})

export const countGameReducer = slice.reducer
export const {
    setNumberComp,
    setSpeed,
    setActionsCount,
    switchSound,
    setActionsArrayAndAnswer
} = slice.actions

//types
export type CountGameType = typeof initialState
// export type CountGameActionsType = InferActionTypes<typeof countGameActions>