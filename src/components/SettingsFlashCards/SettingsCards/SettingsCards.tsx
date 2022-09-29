import React, {ChangeEvent, FC, FocusEvent, memo, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import s from '../../SettingsBlock/Settings.module.css'
import {
    setCard,
    setFirstCardsComp, setIsSpeedOn,
    setNumberOfFlashCards, setSecondCardsComp, setSpeed
} from '../../../store/flashCardsGameReducer'
import {startGame, switchPreStart} from '../../../store/appReducer'
import {PATH} from '../../../enums/paths'
import {NavLink} from 'react-router-dom'
import useSound from 'use-sound'
import rocket_start from '../../../assets/sounds/rocket/rocket_2sec.mp3'


export const SettingsCards: FC = memo(() => {
        const [rocket] = useSound(rocket_start)
        const rocketSound = useCallback(() => rocket(), [rocket])

        const dispatch = useDispatch()
        const {
            firstCardsComposition,
            secondCardsComposition,
            numberOfFlashCards,
            isSpeedOn,
            speed
        } = useSelector((state: AppRootStateType) => state.cards)

        const setTimeoutValue = useCallback((speed: number) => dispatch(setSpeed({speed})), [dispatch])
        const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
            setTimeoutValue(e.currentTarget.valueAsNumber)
        }
        const setIsSpeedOnHandler = (isSpeedOn: boolean) => dispatch(setIsSpeedOn({isSpeedOn}))
        const onChangeIsSpeedOn = (e: ChangeEvent<HTMLInputElement>) => {
            setIsSpeedOnHandler(e.currentTarget.checked)
        }

        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])
        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

        const onChangeFirstCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFirstCardsComp({firstCardsComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])

        const onChangeSecondCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setSecondCardsComp({secondCardsComposition: e.currentTarget.valueAsNumber}))
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

        const changeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(setNumberOfFlashCards({numberOfFlashCards: Number(event.target.value)}))
        }

        const inputSecondCardStyle = numberOfFlashCards !== 2 ? `${s.settings_comp_second_card}` : ''
        const inputSpeedStyle = !isSpeedOn ? `${s.settings_comp_second_card}` : ''

        return <div className={s.container}>
            <NavLink to={PATH.MAIN}>
                <button onClick={handleBackToSettings}>На главную</button>
            </NavLink>
            <div className={s.settings_frame}>
                <div className={s.settings_item}>
                    <div className={s.settings_wrapper}>
                        <div className={s.settings_speed}>
                            <div>На скорость</div>
                            <input type="checkbox" id="sdeedOn" name="sdeedOn" checked={isSpeedOn}
                                   onChange={onChangeIsSpeedOn}
                            />
                        </div>
                        <div className={s.settings_speed}>
                            <div>Скорость:</div>
                            <input
                                className={inputSpeedStyle}
                                disabled={!isSpeedOn}
                                value={speed}
                                type="number"
                                onChange={onChangeTimeOutValue}
                                onFocus={handleFocus}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.settings_item}>
                    <div>
                        <input type="radio" id="1_card" name="cardsNumber" value="1"
                               checked={numberOfFlashCards === 1}
                               onChange={changeCardNumber}/>
                        <label htmlFor="1_card">1-я карточка</label>
                        <input type="radio" id="2_card" name="cardsNumber" value="2"
                               checked={numberOfFlashCards === 2}
                               onChange={changeCardNumber}/>
                        <label htmlFor="2_card">2-я карточка</label>
                    </div>
                </div>
                <div className={s.settings_item}>
                    <div>Состав числа:</div>
                    <div className={s.settings_comp}>
                        <div>
                            <input
                                value={firstCardsComposition}
                                type="number"
                                onChange={onChangeFirstCardsComp}
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className={inputSecondCardStyle}>
                            <input
                                disabled={numberOfFlashCards !== 2}
                                value={secondCardsComposition}
                                type="number"
                                onChange={onChangeSecondCardsComp}
                                onFocus={handleFocus}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={startRocket}>
                Старт
            </button>
        </div>

    }
)
