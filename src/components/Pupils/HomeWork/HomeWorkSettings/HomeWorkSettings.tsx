import React, {ChangeEvent, FC, FocusEvent, useCallback, useEffect, useState} from 'react'
import s from '../../../SettingsBlock/Settings.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../store/store'
import {
    HomeWorkType,
    setCardsSpeed,
    setCountActionsCount,
    setCountNumberComp,
    setCountSpeed,
    setFirstCardsNumberComp,
    setIsSpeedOn,
    setNumberOfCards,
    setSecondCardsNumberComp,
    switchCountVoice,
    switchHWSettings
} from '../../../../store/homeWorkReducer'
import {CountSettings} from '../../../commonComponents/CountSettings/CountSettings'
import {CardsSettings} from '../../../commonComponents/CardsSettings/CardsSettings'

type HomeWorkSettingsType = {
    userId: number | null
}

export const HomeWorkSettings: FC<HomeWorkSettingsType> = ({userId}) => {

    const [isDisabledCheckboxVoice, setIsDisabledCheckboxVoice] = useState<boolean>(false)

    const dispatch = useDispatch()

    const homeWork = useSelector((state: AppRootStateType) => state.homework.homeWork)
    const index = homeWork.findIndex((data: HomeWorkType) => data.userId === userId)
    const {
        firstCardsComposition,
        secondCardsComposition,
        numberOfFlashCards,
        speedCards,
        // numberOfCardsExercises,
        isSpeedOn
    } = homeWork[index].cards  // get cards state data from homeWorkReducer for user with userId

    const {
        // numberOfCountExercises,
        isVoiceOn,
        numberComposition,
        actionsCount,
        speedCount
    } = homeWork[index].count  // get count state data from homeWorkReducer for user with userId

    const onChangeCardsTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardsSpeed({userId, speedCards: e.currentTarget.valueAsNumber}))
    }
    const onChangeIsSpeedOn = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsSpeedOn({userId, isSpeedOn: e.currentTarget.checked}))
    }
    const changeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfCards({userId, numberOfFlashCards: Number(event.target.value)}))
    }
    const onChangeFirstCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstCardsNumberComp({userId, firstCardsComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch, userId])
    const onChangeSecondCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecondCardsNumberComp({userId, secondCardsComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch, userId])

    const setVoice = useCallback((isVoiceOn: boolean) => dispatch(switchCountVoice({
        userId,
        isVoiceOn
    })), [dispatch, userId])
    const saveSettings = useCallback(() => dispatch(switchHWSettings({isHWSettings: false})), [dispatch])

    const disabledCheckboxCondition: boolean = (numberComposition < 11 && speedCount < 1)
        || (numberComposition > 10 && numberComposition < 21 && speedCount < 1.2)
        || numberComposition > 20

    useEffect(() => {
        if (disabledCheckboxCondition) {
            setVoice(false)
            setIsDisabledCheckboxVoice(true)
        } else {
            setVoice(true)
            setIsDisabledCheckboxVoice(false)
        }
        return () => {
            saveSettings()  // don't show settings after leaving this page
        }
    }, [speedCount, setVoice, disabledCheckboxCondition, saveSettings])


    const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountNumberComp({userId, numberComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch, userId])
    const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountSpeed({userId, speedCount: e.currentTarget.valueAsNumber}))
    }
    const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountActionsCount({userId, actionsCount: e.currentTarget.valueAsNumber}))
    }, [dispatch, userId])
    const onChangeVoice = (e: ChangeEvent<HTMLInputElement>) => {
        setVoice(e.currentTarget.checked)
    }

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

    return <div className={s.container}>
        <CardsSettings speed={speedCards}
                       isSpeedOn={isSpeedOn}
                       numberOfFlashCards={numberOfFlashCards}
                       firstCardsComposition={firstCardsComposition}
                       secondCardsComposition={secondCardsComposition}
                       changeCardNumber={changeCardNumber}
                       handleFocus={handleFocus}
                       onChangeFirstCardsComp={onChangeFirstCardsComp}
                       onChangeSecondCardsComp={onChangeSecondCardsComp}
                       onChangeIsSpeedOn={onChangeIsSpeedOn}
                       onChangeTimeOutValue={onChangeCardsTimeOutValue}
        />
        <CountSettings actionsCount={actionsCount}
                       speed={speedCount}
                       isVoiceOn={isVoiceOn}
                       numberComposition={numberComposition}
                       isDisabledCheckboxVoice={isDisabledCheckboxVoice}
                       onChangeVoice={onChangeVoice}
                       onChangeActionsCount={onChangeActionsCount}
                       handleFocus={handleFocus}
                       onChangeTimeOutValue={onChangeTimeOutValue}
                       onChangeNumberComp={onChangeNumberComp}
        />
        <button onClick={saveSettings}>
            Сохранить
        </button>
    </div>
}

