import React, {ChangeEvent, FC, FocusEvent} from 'react'
import s from '../../SettingsBlock/Settings.module.css'
import {SpeedCardsSettings} from './SpeedCardsSettings'
import {NumberOfCardsSettings} from './NumberOfCardsSettings'
import {NumberCompCardsSettings} from './NumberCompCardsSettings'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType} from '../../../store/homeWorkReducer'

type SettingsCardsPropsType = {
    isSpeedOn: boolean
    speedCards: number
    numberOfFlashCards: number
    firstCardsComposition: number
    secondCardsComposition: number
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeTimeOutValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeIsSpeedOn: (e: ChangeEvent<HTMLInputElement>) => void
    changeCardNumber: (event: ChangeEvent<HTMLInputElement>) => void
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
                                                              onChangeSecondCardsComp
                                                          }) => {
    const isStartHWDoing = useSelector((state: AppRootStateType) => state.homework.isStartHWDoing)
    const currentUserId = useSelector((state: AppRootStateType) => state.homework.currentUserId)
    const homeWorkArr = useSelector((state: AppRootStateType) => state.homework.homeWork)
    const index = homeWorkArr.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    const {
        isSpeedOnHW,
        speedCardsHW,
        numberOfFlashCardsHW,
        firstCardsCompositionHW,
        secondCardsCompositionHW
    } = homeWorkArr[index].cards

    const minSpeedValue = 0.1
    const maxSpeedValue = isStartHWDoing ? speedCardsHW: 10
    const minFirstCardsCompositionValue = isStartHWDoing ? firstCardsCompositionHW: 3
    const maxSecondCardsCompositionValue = isStartHWDoing ? secondCardsCompositionHW: 3
    const minNumberOfFlashCardsValue = isStartHWDoing ? numberOfFlashCardsHW: 1
    const isStrictSpeedOnMode = isStartHWDoing ? isSpeedOnHW: isSpeedOn

    return <div className={s.settings_frame}>
        <div className={s.settings_name}>Флэшкарты</div>
        <SpeedCardsSettings isSpeedOn={isStrictSpeedOnMode}
                            speedCards={speedCards}
                            handleFocus={handleFocus}
                            onChangeTimeOutValue={onChangeTimeOutValue}
                            onChangeIsSpeedOn={onChangeIsSpeedOn}
                            minValue={minSpeedValue}
                            maxValue={maxSpeedValue}
        />
        <NumberOfCardsSettings changeCardNumber={changeCardNumber} numberOfFlashCards={minNumberOfFlashCardsValue}/>
        <NumberCompCardsSettings handleFocus={handleFocus}
                                 onChangeFirstCardsComp={onChangeFirstCardsComp}
                                 onChangeSecondCardsComp={onChangeSecondCardsComp}
                                 firstCardsComposition={firstCardsComposition}
                                 secondCardsComposition={secondCardsComposition}
                                 numberOfFlashCards={numberOfFlashCards}
                                 minValue={minFirstCardsCompositionValue}
                                 maxValue={maxSecondCardsCompositionValue}
        />
    </div>
}
