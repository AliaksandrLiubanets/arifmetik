import ava_Evgenia from '../assets/pupils/avatars/Evgenia.jpg'
import ava_Miron from '../assets/pupils/avatars/Miron.jpg'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const authState = {
    authData: [
        {
            id: 1,
            email: 'evgenia@yandex.ru',
            login: 'Evgenia',
            ava: ava_Evgenia,
            isAuth: false
        },
        {
            id: 2,
            email: 'miron@yandex.ru',
            login: 'Miron',
            ava: ava_Miron,
            isAuth: false
        }
    ]
}

export const slice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        setIsAuth(state, action: PayloadAction<{ userId: number, isAuth: boolean }>) {
            const index = state.authData.findIndex((data: AuthUserData) => data.id === action.payload.userId )
            state.authData[index].isAuth = action.payload.isAuth
        },
    }
})

export const authReducer = slice.reducer
export const {
    setIsAuth,
} = slice.actions

//types
export type AuthUserData = {
    id: number
    email: string
    login: string
    ava: string
    isAuth: boolean
}

// export type CountGameActionsType = InferActionTypes<typeof countGameActions>