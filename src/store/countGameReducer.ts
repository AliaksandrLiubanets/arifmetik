import {getArrayOfCalculationsAndAnswer} from '../utils/getResultAndAction'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    numberComposition: 0 as number,
    speed: 1,
    actionsCount: 2,
    isSoundOn: true,
    isPreStart: false,
    isStarted: false,
    actionsArray: [] as string[],
    answer: 0,
    isShowAnswer: false,
    isShowInput: false
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
        } ,
        setActionsCount(state, action: PayloadAction<{ actionsCount: number }>) {
            state.actionsCount = action.payload.actionsCount
        },
        switchSound(state, action: PayloadAction<{ isSoundOn: boolean }>) {
            state.isSoundOn = action.payload.isSoundOn
        },
        switchPreStart(state, action: PayloadAction<{ isPreStart: boolean }>) {
            state.isPreStart = action.payload.isPreStart
        },
        startGame(state, action: PayloadAction<{ isStarted: boolean }>) {
            state.isStarted = action.payload.isStarted
        },
        setActionsArrayAndAnswer(state, action: PayloadAction<{  }>) {
            const {arrayOfCalculations, answer} = getArrayOfCalculationsAndAnswer(state.actionsCount, state.numberComposition)
            state.actionsArray = arrayOfCalculations
            state.answer = answer
        }
    }
})

export const countGameReducer = slice.reducer
export const {setNumberComp, setSpeed, setActionsCount, switchSound, switchPreStart, startGame, setActionsArrayAndAnswer} = slice.actions
//
// export const countGameActions = {
//     setNumberComp: (numberComposition: number) => ({type: 'COUNT/SET_NUMBER_COMPOSITION', payload: {numberComposition}} as const),
//     setSpeed: (speed: number) => ({type: 'COUNT/SET_SPEED', payload: {speed}} as const),
//     setActionsCount: (actionsCount: number) => ({type: 'COUNT/SET_ACTIONS_COUNT', payload: {actionsCount}} as const),
//     switchSound: (isSoundOn: boolean) => ({type: 'COUNT/SWITCH_SOUND', payload: {isSoundOn}} as const),
//     switchPreStart: (isPreStart: boolean) => ({type: 'COUNT/SWITCH_PRESTART', payload: {isPreStart}} as const),
//     switchStartGame: (isStarted: boolean) => ({type: 'COUNT/SWITCH_START_GAME', payload: {isStarted}} as const),
//     setActionsArrayAndAnswer: () => ({type: 'COUNT/MAKE_ACTIONS_ARRAY_AND_ANSWER'} as const)
// }

//types
export type CountGameType = typeof initialState
// export type CountGameActionsType = InferActionTypes<typeof countGameActions>