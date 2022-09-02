import {combineReducers} from 'redux'
import {CountGameActionsType, countGameReducer} from './countGameReducer'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    count: countGameReducer
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = CountGameActionsType
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector