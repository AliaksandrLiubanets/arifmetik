import ava_Evgenia from '../assets/pupils/avatars/Evgenia.jpg'
import ava_Miron from '../assets/pupils/avatars/Miron.jpg'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    pupils: [
        {
            id: 1,
            ava: ava_Evgenia,
            name: 'Евгения',
            email: 'evgenia@yandex.ru',
            homeTask: [
                {
                    count: {
                        numberOfExercises: 5,
                        numberComposition: 10,
                        speed: 1.5,
                        actionsCount: 10
                    },
                    cards: {
                        numberOfExercises: 5,
                        numberComposition: 10,
                        speed: 1.5
                    },
                }
            ]
        },
        {
            id: 2,
            ava: ava_Miron,
            name: 'Мирон',
            email: 'miron@yandex.ru',
            homeTask: [
                {
                    count: {
                        numberOfExercises: 5,
                        numberComposition: 10,
                        speed: 1.5,
                        actionsCount: 10
                    },
                    cards: {
                        numberOfExercises: 5,
                        numberComposition: 10,
                        speed: 1.5
                    }
                }
            ]
        }
    ]
}


export const slice = createSlice({
    name: 'pupils',
    initialState: initialState,
    reducers: {
        setPupils(state, action: PayloadAction<{ pupils: PupilType[] }>) {
            state.pupils = action.payload.pupils
        },
        addPupil(state, action: PayloadAction<{ pupil: PupilType }>) {
            state.pupils = [...state.pupils, action.payload.pupil]
        },
        removePupil(state, action: PayloadAction<{ id: number }>) {
            state.pupils = state.pupils.filter(pupil => pupil.id !== action.payload.id)
        }
    }
})


export const pupilsReducer = slice.reducer
export const {
    setPupils,
    addPupil,
    removePupil
} = slice.actions

//types
export type PupilType = {
    id: number
    ava: string
    name: string
    email: string
    homeTask: HomeTaskType[]
}
export type HomeTaskType = {
    count: CountTaskType
    cards: CardsTaskType
}
export type CountTaskType = {
    numberOfExercises: number
    numberComposition: number
    speed: number
    actionsCount: number
}
export type CardsTaskType = Omit<CountTaskType, 'actionsCount'>

// export type CountGameActionsType = InferActionTypes<typeof countGameActions>