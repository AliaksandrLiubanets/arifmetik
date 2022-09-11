import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    isPreStart: false,
}

export const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        switchPreStart(state, action: PayloadAction<{ isPreStart: boolean }>) {
            state.isPreStart = action.payload.isPreStart
        },
    }
})

export const appReducer = slice.reducer
export const {
    switchPreStart
} = slice.actions

//types
export type CountGameType = typeof initialState
// export type CountGameActionsType = InferActionTypes<typeof countGameActions>