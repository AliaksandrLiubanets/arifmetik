import React, {useCallback, useState} from 'react'
import {Actions} from '../Actions/Actions'
import {AnswerInput} from '../commonComponents/AnswerInput/AnswerInput'

export const CountContainer = () => {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])

    return <>
        {
            !isShowAnswer
                ? <Actions setIsShowAnswer={setIsShowAnswer} focusOnElement={focusOnElement}/>
                : <AnswerInput inputAnswer={inputAnswer}
                               setInputAnswer={setInputAnswer}
                               showAnswer={showAnswer}
                               isFocus={isFocus}
                               focusOnElement={focusOnElement}
                />
        } </>
}