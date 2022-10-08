import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type GameType = '/cards' | '/count'

const initialState = {
    isPreStart: false,
    isStarted: false,
    typeOfGame: '/cards'
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
        changeGame(state, action: PayloadAction<{ typeOfGame: string  }>) {
            state.typeOfGame = action.payload.typeOfGame
        },
    }
})

export const appReducer = slice.reducer
export const {
    switchPreStart,
    startGame,
    changeGame
} = slice.actions

//types
export type CountGameType = typeof initialState
// export type CountGameActionsType = InferActionTypes<typeof countGameActions>