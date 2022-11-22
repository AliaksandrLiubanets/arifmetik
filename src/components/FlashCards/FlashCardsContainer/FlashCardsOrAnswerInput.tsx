import React, {FC, useState} from 'react'
import {FlashCards} from '../FlashCardsComponent/FlashCards'
import {AnswerInput} from '../../commonComponents/AnswerInput/AnswerInput'

type FlashCardsOrInputPropsType = {
    isShowAnswer: boolean
    isFocus: boolean
    focusOnElement: (isShowInput: boolean) => void
    showAnswer: (isFocus: boolean) => void
}
export const FlashCardsOrAnswerInput: FC<FlashCardsOrInputPropsType> = ({isShowAnswer, isFocus, showAnswer, focusOnElement}) => {

    const [inputAnswer, setInputAnswer] = useState(0)

    return <>
        {!isShowAnswer
            ? <FlashCards focusOnElement={focusOnElement}
                          showAnswer={showAnswer}
            />
            : <AnswerInput inputAnswer={inputAnswer}
                           setInputAnswer={setInputAnswer}
                           showAnswer={showAnswer}
                           isFocus={isFocus}
                           focusOnElement={focusOnElement}
            />
        }
    </>
}