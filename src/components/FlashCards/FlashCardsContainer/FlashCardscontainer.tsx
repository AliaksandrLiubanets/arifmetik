import React, {FC, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {setCardAndAnswer} from '../../../store/flashCardsGameReducer'
import {ButtonNext} from '../../ButtonNext/ButtonNext'
import {FlashCards} from '../FlashCardsComponent/FlashCards'
import {FlashCardsOrAnswerInput} from './FlashCardsOrAnswerInput'

export const FlashCardsContainer: FC = () => {

    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isFocus, setIsFocus] = useState(true)

    const dispatch = useDispatch()
    const {
        isSpeedOn
    } = useSelector((state: AppRootStateType) => state.cards)

    const nextFlashCard = () => dispatch(setCardAndAnswer())

    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

    return <>
        {isSpeedOn
            ? <FlashCardsOrAnswerInput focusOnElement={focusOnElement}
                                       showAnswer={showAnswer}
                                       isShowAnswer={isShowAnswer}
                                       isFocus={isFocus}
            />
            : <>
                <FlashCards/>
                <ButtonNext isOnFocus={true} callback={nextFlashCard} />
            </>
        }
    </>
}
