import React, {FC, FocusEvent, memo, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from '../../SettingsBlock/Settings.module.css'
import {
    setCardAndAnswer,
    setCardSpeed,
    setFirstCardsComp,
    setIsSpeedOn,
    setNumberOfFlashCards,
    setSecondCardsComp
} from '../../../store/flashCardsGameReducer'
import {changeGame, startGame, switchPreStart} from '../../../store/appReducer'
import {useLocation} from 'react-router-dom'
import useSound from 'use-sound'
import rocket_start from '../../../assets/sounds/rocket/rocket_2sec.mp3'
import {HeadButtons} from '../../commonComponents/HeadButtons/HeadButtons'
import {CardsSettings} from '../../commonComponents/CardsSettings/CardsSettings'


export const SettingsCardsContainer: FC = memo(() => {
        const [rocket] = useSound(rocket_start)
        const rocketSound = useCallback(() => rocket(), [rocket])

        const location = useLocation()
        const setTypeOfGame = () => {
            dispatch(changeGame({typeOfGame: location.pathname}))
        }

        const dispatch = useDispatch()
        const {
            firstCardsComposition,
            secondCardsComposition,
            numberOfFlashCards,
            isSpeedOn,
            speedCards
        } = useSelector((state: AppRootStateType) => state.cards)

        const onChangeTimeOutValue = (value: number) => {
            dispatch(setCardSpeed({speedCards: value}))
        }
        const onChangeIsSpeedOn = (value: boolean) => {
            dispatch(setIsSpeedOn({isSpeedOn: value}))
        }
        const changeCardNumber = (value: number) => {
            dispatch(setNumberOfFlashCards({numberOfFlashCards: value}))
        }
        const onChangeFirstCardsComp = useCallback((value: number) => {
            dispatch(setFirstCardsComp({firstCardsComposition: value}))
        }, [dispatch])
        const onChangeSecondCardsComp = useCallback((value: number) => {
            dispatch(setSecondCardsComp({secondCardsComposition: value}))
        }, [dispatch])

        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])
        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()
        const setRandomCard = () => dispatch(setCardAndAnswer())
        const start = () => dispatch(startGame({isStarted: true}))
        const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

        const startRocket = () => {
            setIsRocket(true)
            setRandomCard()
            start()
            rocketSound()
            setTypeOfGame()
        }

        return <div className={s.container}>
            <HeadButtons handleBackToSettings={handleBackToSettings}/>
            <CardsSettings speedCards={speedCards}
                           numberOfFlashCards={numberOfFlashCards}
                           firstCardsComposition={firstCardsComposition}
                           secondCardsComposition={secondCardsComposition}
                           isSpeedOn={isSpeedOn}
                           onChangeTimeOutValue={onChangeTimeOutValue}
                           onChangeIsSpeedOn={onChangeIsSpeedOn}
                           handleFocus={handleFocus}
                           onChangeFirstCardsComp={onChangeFirstCardsComp}
                           onChangeSecondCardsComp={onChangeSecondCardsComp}
                           changeCardNumber={changeCardNumber}
            />
            <button onClick={startRocket}>
                Старт
            </button>
        </div>
    }
)
