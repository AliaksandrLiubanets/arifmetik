import {combineReducers} from 'redux'
import {countGameReducer} from './countGameReducer'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import {flashCardsGameReducer} from './flashCardsGameReducer'
import {appReducer} from './appReducer'
import {pupilsReducer} from './pupilsReducer'

const rootReducer = combineReducers({
    app: appReducer,
    count: countGameReducer,
    cards: flashCardsGameReducer,
    pupils: pupilsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
// export type ActionsType = CountGameActionsType
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//@ts-ignore
window.store = store;