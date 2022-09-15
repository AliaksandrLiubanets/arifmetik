import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    isPreStart: false,
    isStarted: false,
}

export const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        switchPreStart(state, action: PayloadAction<{ isPreStart: boolean }>) {
            state.isPreStart = action.payload.isPreStart
        },
        startGame(state, action: PayloadAction<{ isStarted: boolean }>) {
            state.isStarted = action.payload.isStarted
        },
    }
})

export const appReducer = slice.reducer
export const {
    switchPreStart,
    startGame
} = slice.actions

//types
export type CountGameType = typeof initialState
// export type CountGameActionsType = InferActionTypes<typeof countGameActions>