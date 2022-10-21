import s from './Settings.module.css'
import React, {ChangeEvent, FC, FocusEvent, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {setFirstCardsComp, setSecondCardsComp} from '../../store/flashCardsGameReducer'

type NumCompPropsType = {
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
}

export const NumberCompositionSettings: FC<NumCompPropsType> = ({handleFocus}) => {

    const {
        firstCardsComposition,
        secondCardsComposition,
        numberOfFlashCards
    } = useSelector((state: AppRootStateType) => state.cards)

    const dispatch = useDispatch()

    const onChangeFirstCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstCardsComp({firstCardsComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch])

    const onChangeSecondCardsComp = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecondCardsComp({secondCardsComposition: e.currentTarget.valueAsNumber}))
    }, [dispatch])

    const inputSecondCardStyle = numberOfFlashCards !== 2 ? `${s.settings_comp_second_card}` : ''

    return <div className={s.settings_item}>
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
}