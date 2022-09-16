import React, {ChangeEvent, FC, FocusEvent, memo, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from '../../SettingsBlock/Settings.module.css'
import {setCard, setFlashCardsComp} from '../../../store/flashCardsGameReducer'
import {startGame, switchPreStart} from '../../../store/appReducer'
import {PATH} from '../../../enums/paths'
import {NavLink} from 'react-router-dom'
import useSound from 'use-sound'
import rocket_start from '../../../assets/sounds/rocket/rocket_2sec.mp3'


export const SettingsCards: FC = memo(() => {
        const [rocket] = useSound(rocket_start)
        const rocketSound = useCallback(() => rocket(), [rocket])

        const dispatch = useDispatch()
        const {cardsComposition} = useSelector((state: AppRootStateType) => state.cards)

        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])
        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

        const onChangeCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFlashCardsComp({cardsComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])

        const setRandomCard = () => dispatch(setCard())
        const start = () => dispatch(startGame({isStarted: true}))
        const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

        const startRocket = () => {
            setIsRocket(true)
            setRandomCard()
            start()
            rocketSound()
        }

        const [value, setValue] = useState('1');

        function chengeValue(event: ChangeEvent<HTMLInputElement>) {
            setValue(event.target.value);
        }


        return <div className={s.container}>
            <NavLink to={PATH.MAIN}>
                <button onClick={handleBackToSettings}>На главную</button>
            </NavLink>
            <div className={s.settings_frame}>
                <div className={s.settings_item}>
                    <div>
                        <input type="radio" id='1_card' name="cardsNumber" value="1"
                               checked={value === '1'}
                               onChange={chengeValue} />
                        <label htmlFor="1_card">1-я карточка</label>
                        <input type="radio" id='2_card' name="cardsNumber" value="2"
                               checked={value === '2'}
                               onChange={chengeValue} />
                        <label htmlFor="2_card">2-я карточка</label>
                    </div>
                </div>
                <div className={s.settings_item}>
                    <div>Состав числа:</div>
                    <input
                        value={cardsComposition}
                        type="number"
                        onChange={onChangeCardsComp}
                        onFocus={handleFocus}
                    />
                </div>
            </div>
            <button onClick={startRocket}>
                Старт
            </button>
        </div>

    }
)
