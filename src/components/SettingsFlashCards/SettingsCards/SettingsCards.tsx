import React, {ChangeEvent, FC, FocusEvent, memo, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from '../../SettingsBlock/Settings.module.css'
import {
    setCardAndAnswer,
    setFirstCardsComp,
    setIsSpeedOn,
    setNumberOfFlashCards, setSecondCardsComp,
    setSpeed
} from '../../../store/flashCardsGameReducer'
import {changeGame, startGame, switchPreStart} from '../../../store/appReducer'
import {PATH} from '../../../enums/paths'
import {NavLink, useLocation} from 'react-router-dom'
import useSound from 'use-sound'
import rocket_start from '../../../assets/sounds/rocket/rocket_2sec.mp3'
import {SpeedCardsSettings} from '../../commonComponents/CardsSettings/SpeedCardsSettings'
import {NumberOfCardsSettings} from '../../commonComponents/CardsSettings/NumberOfCardsSettings'
import {NumberCompCardsSettings} from '../../commonComponents/CardsSettings/NumberCompCardsSettings'


export const SettingsCards: FC = memo(() => {
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
            speed
        } = useSelector((state: AppRootStateType) => state.cards)

        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setSpeed({speed: e.currentTarget.valueAsNumber}))
        }
        const onChangeIsSpeedOn = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setIsSpeedOn({isSpeedOn: e.currentTarget.checked}))
        }
        const changeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(setNumberOfFlashCards({numberOfFlashCards: Number(event.target.value)}))
        }
        const onChangeFirstCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFirstCardsComp({firstCardsComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        const onChangeSecondCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setSecondCardsComp({secondCardsComposition: e.currentTarget.valueAsNumber}))
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
            <NavLink to={PATH.MAIN}>
                <button onClick={handleBackToSettings}>На главную</button>
            </NavLink>
            <div className={s.settings_frame}>
                <SpeedCardsSettings isSpeedOn={isSpeedOn}
                                    speed={speed}
                                    handleFocus={handleFocus}
                                    onChangeTimeOutValue={onChangeTimeOutValue}
                                    onChangeIsSpeedOn={onChangeIsSpeedOn}
                />
                <NumberOfCardsSettings changeCardNumber={changeCardNumber} numberOfFlashCards={numberOfFlashCards}/>
                <NumberCompCardsSettings handleFocus={handleFocus}
                                         onChangeFirstCardsComp={onChangeFirstCardsComp}
                                         onChangeSecondCardsComp={onChangeSecondCardsComp}
                                         numberOfFlashCards={numberOfFlashCards}
                                         firstCardsComposition={firstCardsComposition}
                                         secondCardsComposition={secondCardsComposition}
                />
            </div>
            <button onClick={startRocket}>
                Старт
            </button>
        </div>
    }
)
