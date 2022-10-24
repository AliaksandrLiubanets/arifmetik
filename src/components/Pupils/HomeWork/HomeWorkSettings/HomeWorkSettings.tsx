import React, {ChangeEvent, FC, FocusEvent, useCallback, useEffect, useState} from 'react'
import s from '../../../SettingsBlock/Settings.module.css'
import {NavLink, useLocation} from 'react-router-dom'
import {PATH} from '../../../../enums/paths'
import {SpeedCardsSettings} from '../../../commonComponents/CardsSettings/SpeedCardsSettings'
import {NumberOfCardsSettings} from '../../../commonComponents/CardsSettings/NumberOfCardsSettings'
import {NumberCompCardsSettings} from '../../../commonComponents/CardsSettings/NumberCompCardsSettings'
import useSound from 'use-sound'
import rocket_start from '../../../../assets/sounds/rocket/rocket_2sec.mp3'
import {changeGame, startGame, switchPreStart} from '../../../../store/appReducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../store/store'
import {setCardAndAnswer} from '../../../../store/flashCardsGameReducer'
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
    switchCountVoice, switchHWSettings
} from '../../../../store/homeWorkReducer'
import {NumberCompCountSettings} from '../../../commonComponents/CountSettings/NumberCompCountSettings'
import {SpeedCountSettings} from '../../../commonComponents/CountSettings/SpeedCountSettings'
import {NumberOfActionsCountSettings} from '../../../commonComponents/CountSettings/NumberOfActionsCountSettings'
import {VoiceOnCountSettings} from '../../../SettingsCount/VoiceOnCountSettings'
import {setActionsArrayAndAnswer} from '../../../../store/countGameReducer'

type HomeWorkSettingsType = {
    userId: number | null
}

export const HomeWorkSettings: FC<HomeWorkSettingsType> = ({userId}) => {

    const [rocket] = useSound(rocket_start)
    const rocketSound = useCallback(() => rocket(), [rocket])
    const [isDisabledCheckboxSound, setIsDisabledCheckboxSound] = useState<boolean>(false)
    const [applySettingsToggle, setApplySettingsToggle] = useState(false)

    const location = useLocation()
    const dispatch = useDispatch()
    const setTypeOfGame = () => dispatch(changeGame({typeOfGame: location.pathname}))

    const homeWork = useSelector((state: AppRootStateType) => state.homework.homeWork)
    // const {isHWSettings} = useSelector((state: AppRootStateType) => state.homework)
    const index = homeWork.findIndex((data: HomeWorkType) => data.userId === userId)
    const {
        firstCardsComposition,
        secondCardsComposition,
        numberOfFlashCards,
        speedCards,
        numberOfCardsExercises,
        isSpeedOn
    } = homeWork[index].cards  // get cards state data from homeWorkReducer for user with userId

    const {
        numberOfCountExercises,
        isVoiceOn,
        numberComposition,
        actionsCount,
        speedCount,
    } = homeWork[index].count  // get count state data from homeWorkReducer for user with userId

    const onChangeCardsTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardsSpeed({userId, speedCards: e.currentTarget.valueAsNumber}))
    }
    const onChangeIsSpeedOn = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsSpeedOn({ userId, isSpeedOn: e.currentTarget.checked}))
    }
    const changeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfCards({userId, numberOfFlashCards: Number(event.target.value)}))
    }
    const onChangeFirstCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstCardsNumberComp({userId, firstCardsComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeSecondCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecondCardsNumberComp({userId, secondCardsComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch])


    const setVoice = useCallback((isVoiceOn: boolean) => dispatch(switchCountVoice({userId, isVoiceOn})), [dispatch])

    const disabledCheckboxCondition: boolean = (numberComposition < 11 && speedCount < 1)
        || (numberComposition > 10 && numberComposition < 21 && speedCount < 1.2)
        || numberComposition > 20

    useEffect(() => {
        if (disabledCheckboxCondition) {
            setVoice(false)
            setIsDisabledCheckboxSound(true)
        } else {
            setVoice(true)
            setIsDisabledCheckboxSound(false)
        }
    }, [speedCount, setVoice, disabledCheckboxCondition])

    const onChangeNumberComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountNumberComp({userId, numberComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountSpeed({userId, speedCount: e.currentTarget.valueAsNumber}))
    }
    const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCountActionsCount({userId, actionsCount: e.currentTarget.valueAsNumber}))
    }, [dispatch])
    const onChangeVoice = (e: ChangeEvent<HTMLInputElement>) => {
        setVoice(e.currentTarget.checked)
    }


    const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
    const setRandomCard = () => dispatch(setCardAndAnswer())
    const start = () => dispatch(startGame({isStarted: true}))
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

    const saveSettings = () => dispatch(switchHWSettings({isHWSettings: false}))

    // const startRocket = () => {
    //     setIsRocket(true)
    //     setRandomCard()
    //     start()
    //     rocketSound()
    //     setTypeOfGame()
    // }
    // const makeActionsArrayAndAnswer = () => dispatch(setActionsArrayAndAnswer())

    return <div className={s.container}>
        {/*<NavLink to={PATH.MAIN}>*/}
        {/*    <button onClick={handleBackToSettings}>На главную</button>*/}
        {/*</NavLink>*/}
        <div className={s.settings_frame}>
            <SpeedCardsSettings isSpeedOn={isSpeedOn}
                                speed={speedCards}
                                handleFocus={handleFocus}
                                onChangeTimeOutValue={onChangeCardsTimeOutValue}
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
        </div>
        <div className={s.settings_frame}>
            <NumberCompCountSettings onChangeNumberComp={onChangeNumberComp}
                                     handleFocus={handleFocus}
                                     numberComposition={numberComposition}/>
            <SpeedCountSettings speed={speedCount}
                                handleFocus={handleFocus}
                                onChangeTimeOutValue={onChangeTimeOutValue}/>
            <NumberOfActionsCountSettings actionsCount={actionsCount}
                                          onChangeActionsCount={onChangeActionsCount}
                                          handleFocus={handleFocus}/>
            <VoiceOnCountSettings isVoiceOn={isVoiceOn}
                                  isDisabledCheckboxSound={isDisabledCheckboxSound}
                                  onChangeVoice={onChangeVoice}/>
        </div>
        <button onClick={saveSettings}>
            Сохранить
        </button>
    </div>
}