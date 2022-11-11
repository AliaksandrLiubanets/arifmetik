import React, {ChangeEvent, FC, FocusEvent, useCallback, useEffect, useState} from 'react'
import s from '../../../SettingsBlock/Settings.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../store/store'
import {
    HomeWorkType, makeCardsTasksAmount, makeCountTasksAmount,
    setCardsSpeed,
    setCountActionsCount,
    setCountNumberComp,
    setCountSpeed,
    setFirstCardsNumberComp,
    setIsSpeedOn,
    setNumberOfCards,
    setSecondCardsNumberComp,
    switchCountVoice, switchHWSettings
} from '../../../../store/homeWorkReducer'
import {CountSettings} from '../../../commonComponents/CountSettings/CountSettings'
import {CardsSettings} from '../../../commonComponents/CardsSettings/CardsSettings'

type HomeWorkSettingsType = {
    userId: number
}

export const HomeWorkSettings: FC<HomeWorkSettingsType> = ({userId}) => {
    const [isDisabledCheckboxVoice, setIsDisabledCheckboxVoice] = useState<boolean>(false)

    const dispatch = useDispatch()

    const homeWork = useSelector((state: AppRootStateType) => state.homework.homeWork)
    const index = homeWork.findIndex((data: HomeWorkType) => data.userId === userId)
    const {
        firstCardsCompositionHW,
        secondCardsCompositionHW,
        numberOfFlashCardsHW,
        speedCardsHW,
        isSpeedOnHW
    } = homeWork[index].cards  // get cards state data from homeWorkReducer for user with userId

    const {
        isVoiceOn,
        numberComposition,
        actionsCount,
        speedCount
    } = homeWork[index].count  // get count state data from homeWorkReducer for user with userId

    const onChangeCardsTimeOutValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardsSpeed({speedCardsHW: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeIsSpeedOn = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsSpeedOn({isSpeedOnHW: e.currentTarget.checked}))
    }, [dispatch])
    const changeCardNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfCards({numberOfFlashCardsHW: Number(e.target.value)}))
    }, [dispatch])
    const onChangeFirstCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstCardsNumberComp({firstCardsCompositionHW: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeSecondCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecondCardsNumberComp({secondCardsCompositionHW: e.currentTarget.valueAsNumber}))
    }, [dispatch])

    const setVoice = useCallback((isVoiceOn: boolean) => dispatch(switchCountVoice({
        isVoiceOn
    })), [dispatch])

    const saveSettings = useCallback(() => {
        dispatch(switchHWSettings({isHWSettings: false}))
        dispatch(makeCardsTasksAmount())
        dispatch(makeCountTasksAmount())
    }, [dispatch])

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
    }, [setVoice, speedCount, disabledCheckboxCondition, saveSettings])

    const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountNumberComp({numberComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeTimeOutValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountSpeed({speedCount: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountActionsCount({ actionsCount: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeVoice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setVoice(e.currentTarget.checked)
    }, [setVoice])

    const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => e.target.select(), [])

    return <div className={s.container}>
        <CardsSettings speedCards={speedCardsHW}
                       isSpeedOn={isSpeedOnHW}
                       numberOfFlashCards={numberOfFlashCardsHW}
                       firstCardsComposition={firstCardsCompositionHW}
                       secondCardsComposition={secondCardsCompositionHW}
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

