import React, {FC, FocusEvent, memo, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from '../../SettingsBlock/Settings.module.css'
import {setCardAndAnswer} from '../../../store/flashCardsGameReducer'
import {changeGame, startGame, switchPreStart} from '../../../store/appReducer'
import {PATH} from '../../../enums/paths'
import {NavLink, useLocation} from 'react-router-dom'
import useSound from 'use-sound'
import rocket_start from '../../../assets/sounds/rocket/rocket_2sec.mp3'
import {SpeedCardsSettings} from '../../SettingsBlock/SpeedCardsSettings'
import {NumberOfCardsSettings} from '../../SettingsBlock/NumberOfCardsSettings'
import {NumberCompositionSettings} from '../../SettingsBlock/NumberCompositionSettings'


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

        const homeWork = useSelector((state: AppRootStateType) => state.homework.homeWork)

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
                <SpeedCardsSettings isSpeedOn={isSpeedOn} speed={speed} handleFocus={handleFocus} />
                <NumberOfCardsSettings/>
                <NumberCompositionSettings handleFocus={handleFocus}/>
            </div>
            <button onClick={startRocket}>
                Старт
            </button>
        </div>
    }
)
