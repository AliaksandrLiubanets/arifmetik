import {getArrayOfCalculationsAndAnswer} from '../utils/helper'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type ActionAndSoundType = {
    action: string
    sound: string
}

const initialState = {
    numberComposition: 10 as number,
    speed: 1,
    actionsAmount: 2,
    isVoiceOn: true,
    actionsArray: [] as ActionAndSoundType[],
    actionsAndSoundsArray: [] as ActionAndSoundType[],
    answer: 0,
}

export const slice = createSlice({
    name: 'count',
    initialState: initialState,
    reducers: {
        setNumberComp(state, action: PayloadAction<{ numberComposition: number }>) {
            if (action.payload.numberComposition > 2) state.numberComposition = action.payload.numberComposition
        },
        setSpeed(state, action: PayloadAction<{ speed: number }>) {
            if (action.payload.speed > 0) state.speed = action.payload.speed
        },
        setActionsCount(state, action: PayloadAction<{ actionsAmount: number }>) {
            if (action.payload.actionsAmount > 1) state.actionsAmount = action.payload.actionsAmount
        },
        switchSound(state, action: PayloadAction<{ isSoundOn: boolean }>) {
            state.isVoiceOn = action.payload.isSoundOn
        },
        setActionsArrayAndAnswer(state) {
            const {
                arrayOfCalculations,
                answer
            } = getArrayOfCalculationsAndAnswer(state.actionsAmount, state.numberComposition)
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