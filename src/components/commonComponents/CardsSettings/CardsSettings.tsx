import React, {ChangeEvent, FC, FocusEvent, useCallback} from 'react'
import s from '../../SettingsBlock/Settings.module.css'
import {SpeedCardsSettings} from './SpeedCardsSettings'
import {NumberOfCardsSettings} from './NumberOfCardsSettings'
import {NumberCompCardsSettings} from './NumberCompCardsSettings'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType, setCardsNumberOfExercises} from '../../../store/homeWorkReducer'

type SettingsCardsPropsType = {
    isSpeedOn: boolean
    speedCards: number
    numberOfFlashCards: number
    firstCardsComposition: number
    secondCardsComposition: number
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeTimeOutValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeIsSpeedOn: (e: ChangeEvent<HTMLInputElement>) => void
    changeCardNumber: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeFirstCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSecondCardsComp: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CardsSettings: FC<SettingsCardsPropsType> = ({
                                                              isSpeedOn,
                                                              speedCards,
                                                              numberOfFlashCards,
                                                              firstCardsComposition,
                                                              secondCardsComposition,
                                                              handleFocus,
                                                              onChangeTimeOutValue,
                                                              onChangeIsSpeedOn,
                                                              changeCardNumber,
                                                              onChangeFirstCardsComp,
                                                              onChangeSecondCardsComp,

                                                          }) => {

    const dispatch = useDispatch()
    const {currentUserId, homeWork, isHWSettings} = useSelector((state: AppRootStateType) => state.homework)
    let index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    if (index === -1) index = 0
    const numberOfExercises = homeWork[index].cards.numberOfExercises

    const onChangeNumberOfExercises = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardsNumberOfExercises({numberOfExercises: e.currentTarget.valueAsNumber}))
    }, [dispatch])

    return <div className={s.settings_frame}>
        <div className={s.settings_name}>Флэшкарты</div>
        <SpeedCardsSettings isSpeedOn={isSpeedOn}
                            speedCards={speedCards}
                            handleFocus={handleFocus}
                            onChangeTimeOutValue={onChangeTimeOutValue}
                            onChangeIsSpeedOn={onChangeIsSpeedOn}
        />
        <NumberOfCardsSettings changeCardNumber={changeCardNumber} numberOfFlashCards={numberOfFlashCards}/>
        <NumberCompCardsSettings handleFocus={handleFocus}
                                 onChangeFirstCardsComp={onChangeFirstCardsComp}
                                 onChangeSecondCardsComp={onChangeSecondCardsComp}
                                 firstCardsComposition={firstCardsComposition}
                                 secondCardsComposition={secondCardsComposition}
                                 numberOfFlashCards={numberOfFlashCards}
        />
        {
            isHWSettings && <NumberOfExercises numberOfExercises={numberOfExercises} onChangeNumberOfExercises={onChangeNumberOfExercises}
            />
        }

    </div>
}

type NumberOfExercisesPropsType = {
    numberOfExercises: number
    onChangeNumberOfExercises: (e: ChangeEvent<HTMLInputElement>) => void
}

export const NumberOfExercises: FC<NumberOfExercisesPropsType> = ({numberOfExercises, onChangeNumberOfExercises}) => {

    return <div className={s.settings_item}>
        <div className={s.settings_speed}>
            <div>Число примеров:</div>
            <input
                className={''}
                value={numberOfExercises}
                type="number"
                onChange={onChangeNumberOfExercises}
            />
        </div>
    </div>
}
