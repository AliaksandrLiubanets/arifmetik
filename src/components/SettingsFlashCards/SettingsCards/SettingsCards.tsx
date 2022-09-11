import React, {ChangeEvent, FC, FocusEvent, memo, useCallback} from 'react'
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {setCard, setFlashCardsComp, startGame} from '../../../store/flashCardsGameReducer'
import {switchPreStart} from '../../../store/appReducer'

type Props = {
    rocketSound: () => void
}

export const SettingsCards: FC<Props> = memo(({rocketSound}) => {

        // const [isDisabledCheckboxSound, setIsDisabledCheckboxSound] = useState<boolean>(false)

        const dispatch = useDispatch()
        const {cardsComposition} = useSelector((state: AppRootStateType) => state.cards)

        // const setTimeoutValue = useCallback((speed: number) => dispatch(setSpeed({speed})), [dispatch])
        // const setSound = useCallback((isSoundOn: boolean) => dispatch(switchSound({isSoundOn})), [dispatch])
        const setIsRocket = useCallback((isPreStart: boolean) => dispatch(switchPreStart({isPreStart})), [dispatch])

        // const disabledCheckboxCondition: boolean = (numberComposition < 11 && speed < 1)
        //     || (numberComposition > 10 && numberComposition < 21 && speed < 1.2)
        //     || numberComposition > 20

        // useEffect(() => {
        //     if (disabledCheckboxCondition) {
        //         setSound(false)
        //         setIsDisabledCheckboxSound(true)
        //     } else {
        //         setSound(true)
        //         setIsDisabledCheckboxSound(false)
        //     }
        // }, [speed, setSound, disabledCheckboxCondition])

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => e.target.select()

        const onChangeCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFlashCardsComp({cardsComposition: e.currentTarget.valueAsNumber}))
        }, [dispatch])
        // const onChangeTimeOutValue = (e: ChangeEvent<HTMLInputElement>) => {
        //     setTimeoutValue(e.currentTarget.valueAsNumber)
        // }
        // const onChangeActionsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        //     dispatch(setActionsCount({actionsCount: e.currentTarget.valueAsNumber}))
        // }, [dispatch])
        // const onChangeSound = (e: ChangeEvent<HTMLInputElement>) => {
        //     setSound(e.currentTarget.checked)
        // }
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
            {/*<div className={s.settings_block}>*/}
            {/*    <div>Скорость:</div>*/}
            {/*    <input*/}
            {/*        value={speed}*/}
            {/*        type="number"*/}
            {/*        onChange={onChangeTimeOutValue}*/}
            {/*        onFocus={handleFocus}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className={s.settings_block}>*/}
            {/*    <div>Количество действий:</div>*/}
            {/*    <input*/}
            {/*        value={actionsCount}*/}
            {/*        type="number"*/}
            {/*        onChange={onChangeActionsCount}*/}
            {/*        onFocus={handleFocus}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className={s.settings_block}>*/}
            {/*    <label>*/}
            {/*        <input*/}
            {/*            checked={isSoundOn}*/}
            {/*            type="checkbox"*/}
            {/*            onChange={onChangeSound}*/}
            {/*            disabled={isDisabledCheckboxSound}*/}
            {/*        />со звуком*/}
            {/*    </label>*/}
            {/*</div>*/}
            <button onClick={startRocket}>
                Старт
            </button>
        </div>

    }
)
