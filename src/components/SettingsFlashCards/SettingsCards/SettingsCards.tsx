import React, {ChangeEvent, FC, FocusEvent, memo, useCallback} from 'react'
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {setCard, setFlashCardsComp, startGame} from '../../../store/flashCardsGameReducer'
import {switchPreStart} from '../../../store/appReducer'
import {PATH} from '../../../enums/paths'
import {NavLink} from 'react-router-dom'

type Props = {
    rocketSound: () => void
}

export const SettingsCards: FC<Props> = memo(({rocketSound}) => {

        const dispatch = useDispatch()
        const {cardsComposition} = useSelector((state: AppRootStateType) => state.cards)

        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

        const onChangeCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFlashCardsComp({cardsComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])

        const setRandomCard = () => dispatch(setCard())
        const start = () => dispatch(startGame({isStarted: true}))


        const startRocket = () => {
            setIsRocket(true)
            setRandomCard()
            start()
            rocketSound()
        }

        return <div className={s.container}>
            <div className={s.settings_block}>
                <div>Состав числа:</div>
                <input
                    value={cardsComposition}
                    type="number"
                    onChange={onChangeCardsComp}
                    onFocus={handleFocus}
                />
            </div>
            <button onClick={startRocket}>
                Старт
            </button>
            <NavLink to={PATH.MAIN}>На главную</NavLink>
        </div>

    }
)
