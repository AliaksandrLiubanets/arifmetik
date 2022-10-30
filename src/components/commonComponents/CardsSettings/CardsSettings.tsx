import React, {ChangeEvent, FC, FocusEvent, useEffect} from 'react'
import s from '../../SettingsBlock/Settings.module.css'
import {SpeedCardsSettings} from './SpeedCardsSettings'
import {NumberOfCardsSettings} from './NumberOfCardsSettings'
import {NumberCompCardsSettings} from './NumberCompCardsSettings'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType, setStartHWDoing} from '../../../store/homeWorkReducer'

type SettingsCardsPropsType = {
    isSpeedOn: boolean
    speedCards: number
    numberOfFlashCards: number
    firstCardsComposition: number
    secondCardsComposition: number
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
    onChangeTimeOutValue: (value: number) => void
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
    const {isStartHWDoing, isHWSettings} = useSelector((state: AppRootStateType) => state.homework)
    const currentUserId = useSelector((state: AppRootStateType) => state.homework.currentUserId)
    const homeWork = useSelector((state: AppRootStateType) => state.homework.homeWork)
    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) =>  data.userId === currentUserId )
    }

    const {
        isSpeedOnHW,
        speedCardsHW,
        numberOfFlashCardsHW,
        firstCardsCompositionHW,
        secondCardsCompositionHW
    } = homeWork[index].cards

    const dispatch = useDispatch()
    const stopHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: false}))

    useEffect(() => {
        if(isStartHWDoing) {
            return () => {
                stopHWDoing()
            }
        }
    }, [])

    const step = 0.1
    let minSpeedValue = 0.1
    let maxSpeedValue = 5
    const minFirstCardsCompositionValue = isStartHWDoing ? firstCardsCompositionHW: 3
    const maxSecondCardsCompositionValue = isStartHWDoing ? secondCardsCompositionHW: 3
    const minNumberOfFlashCardsValue = isStartHWDoing ? numberOfFlashCardsHW: 1
    const isStrictSpeedOnMode = isStartHWDoing ? isSpeedOnHW: isSpeedOn

    if (isStartHWDoing) {
        minSpeedValue = 0.1
        maxSpeedValue = speedCardsHW
    }
    console.log('isStartHWDoing in CardsSettings:', isStartHWDoing)
    console.log('speedCardsHW:', speedCardsHW)
    console.log('maxSpeedValue:', maxSpeedValue)

    return <div className={s.settings_frame}>
        <div className={s.settings_name}>Флэшкарты</div>
        <SpeedCardsSettings isSpeedOn={isStrictSpeedOnMode}
                            speedCards={speedCards}
                            handleFocus={handleFocus}
                            onChangeTimeOutValue={onChangeTimeOutValue}
                            onChangeIsSpeedOn={onChangeIsSpeedOn}
                            minValue={minSpeedValue}
                            maxValue={maxSpeedValue}
                            stepValue={step}
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
