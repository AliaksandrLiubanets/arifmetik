import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {makeAnswerFromFlashCardOrCount} from '../../../utils/helper'
import {setCardAndAnswer} from '../../../store/flashCardsGameReducer'
import {ButtonNext} from '../../ButtonNext/ButtonNext'
import {FlashCards} from '../FlashCardsComponent/FlashCards'
import {AnswerInput} from '../../commonComponents/AnswerInput/AnswerInput'

export const FlashCardsContainer = () => {

    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const dispatch = useDispatch()
    const {
        isSpeedOn,
    } = useSelector((state: AppRootStateType) => state.cards)

    const nextFlashCard = () => dispatch(setCardAndAnswer())

    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

    return <>
        {isSpeedOn
            ? <>
                {!isShowAnswer
                    ? <FlashCards focusOnElement={focusOnElement} showAnswer={showAnswer}/>
                    : <AnswerInput inputAnswer={inputAnswer}
                                   setInputAnswer={setInputAnswer}
                                   showAnswer={showAnswer}
                                   isFocus={isFocus}
                                   focusOnElement={focusOnElement}
                    />
                }
            </>
            : <>
                <FlashCards/>
                <ButtonNext isOnFocus={true} callback={nextFlashCard}/>
            </>
        }
    </>
}