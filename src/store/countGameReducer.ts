import {InferActionTypes} from './store'

const initialState = {
    numberComposition: 0,
    speed: 1,
    actionsCount: 2,
    isSoundOn: true,
    isPreStart: false
}

export const countGameReducer = (state: CountGameType, action: CountGameActionsType) => {
    switch (action.type) {
        case 'COUNT/SET_NUMBER_COMPOSITION':
        case 'COUNT/SET_SPEED':
        case 'COUNT/SET_ACTIONS_COUNT':
        case 'COUNT/SWITCH_SOUND':
        case 'COUNT/SWITCH_PRESTART':
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

export const countGameActions = {
    setNumberComp: (numberComposition: number) => ({type: 'COUNT/SET_NUMBER_COMPOSITION', payload: {numberComposition}} as const),
    setSpeed: (speed: number) => ({type: 'COUNT/SET_SPEED', payload: {speed}} as const),
    setActionsCount: (actionsCount: number) => ({type: 'COUNT/SET_ACTIONS_COUNT', payload: {actionsCount}} as const),
    switchSound: (isSoundOn: boolean) => ({type: 'COUNT/SWITCH_SOUND', payload: {isSoundOn}} as const),
    switchPreStart: (isPreStart: boolean) => ({type: 'COUNT/SWITCH_PRESTART', payload: {isPreStart}} as const)
}

//types
export type CountGameType = typeof initialState
export type CountGameActionsType = InferActionTypes<typeof countGameActions>