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
    onChangeIsSpeedOn: (value: boolean) => void
    changeCardNumber: (value: number) => void
    onChangeFirstCardsComp: (value: number) => void
    onChangeSecondCardsComp: (value: number) => void
}

export const CardsSettings: FC<SettingsCardsPropsType> = ({
                                                              // isSpeedOn,
                                                              // speedCards,
                                                              // numberOfFlashCards,
                                                              // firstCardsComposition,
                                                              // secondCardsComposition,
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
        index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    }

    const {
        isSpeedOnHW,
        speedCardsHW,
        numberOfFlashCardsHW,
        firstCardsCompositionHW,
        secondCardsCompositionHW
    } = homeWork[index].cards
    const {
        isSpeedOn,
        speedCards,
        numberOfFlashCards,
        firstCardsComposition,
        secondCardsComposition
    } = useSelector((state: AppRootStateType) => state.cards)

    const dispatch = useDispatch()
    const stopHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: false}))

    useEffect(() => {
        if (isStartHWDoing) {
            return () => {
                stopHWDoing()
            }
        }
    }, [])

    const step = 0.1
    let minSpeedValue = 0.1
    let maxSpeedValue = 5
    let minFirstCardsCompositionValue = 3
    let maxFirstCardsCompositionValue = 10
    let minSecondCardsCompositionValue = 3
    let maxSecondCardsCompositionValue = 10
    let minNumberOfFlashCardsValue = 1
    let isSpeedOnMode = false

    if (isStartHWDoing) {
        maxSpeedValue = speedCardsHW
        minFirstCardsCompositionValue = firstCardsCompositionHW
        minSecondCardsCompositionValue = secondCardsCompositionHW
        minNumberOfFlashCardsValue = numberOfFlashCardsHW
        isSpeedOnMode = isSpeedOnHW
    }
    if (isHWSettings) {
        maxSpeedValue = speedCards
        minFirstCardsCompositionValue = firstCardsComposition
        minSecondCardsCompositionValue = secondCardsComposition
        minNumberOfFlashCardsValue = numberOfFlashCards
        isSpeedOnMode = isSpeedOn
    }


    console.log('isStartHWDoing in CardsSettings:', isStartHWDoing)
    console.log('isHWSettings in CardsSettings:', isHWSettings)
    console.log('isSpeedOn:', isSpeedOn)
    console.log('numberOfFlashCards:', numberOfFlashCards)

    return <div className={s.settings_frame}>
        <div className={s.settings_name}>Флэшкарты</div>
        <SpeedCardsSettings isSpeedOn={isSpeedOnMode}
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
                                 minFirstValue={minFirstCardsCompositionValue}
                                 maxFirstValue={maxFirstCardsCompositionValue}
                                 minSecondValue={minSecondCardsCompositionValue}
                                 maxSecondValue={maxSecondCardsCompositionValue}
        />
    </div>
}
