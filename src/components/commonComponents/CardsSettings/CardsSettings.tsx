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
    // onChangeNumberOfExercises?: (e: ChangeEvent<HTMLInputElement>) => void
    // numberOfExercises?: number
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
                                                              // numberOfExercises,
                                                              // onChangeNumberOfExercises
                                                          }) => {

    const isHWSettings = useSelector((state: AppRootStateType) => state.homework.isHWSettings)

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
            isHWSettings && <NumberOfExercises
                // numberOfExercises={numberOfExercises}
                // handleFocus={handleFocus}
                //                                onChangeNumberOfExercises={onChangeNumberOfExercises}
            />
        }

    </div>
}

type NumberOfExerPropsType = {
    // numberOfExercises?: number
    // onChangeNumberOfExercises?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const NumberOfExercises: FC<NumberOfExerPropsType> = () => {
    const {currentUserId, homeWork} = useSelector((state: AppRootStateType) => state.homework)
    const index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    const dispatch = useDispatch()
    const numberOfExercises = homeWork[index].cards.numberOfCardsExercisesHW

    const onChangeCardsNumberOfExercises = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardsNumberOfExercises({userId: currentUserId, numberOfCardsExercisesHW: e.currentTarget.valueAsNumber}))
    }, [dispatch, currentUserId])

    return <div className={s.settings_item}>
            <div className={s.settings_speed}>
                <div>Число примеров:</div>
                <input
                    className={''}
                    value={numberOfExercises}
                    type="number"
                    onChange={onChangeCardsNumberOfExercises}
                />
            </div>
    </div>
}
