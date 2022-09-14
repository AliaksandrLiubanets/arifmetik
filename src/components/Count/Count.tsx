import React, {FC, useCallback, useState} from 'react'
import {Actions} from '../Actions/Actions'
import {Answer} from '../Answer/Answer'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {startGame} from '../../store/countGameReducer'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {AnswerInput} from './AnswerInput'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'

type PropsActionsAnswer = {
    rocketSound: () => void
}

export const Count: FC<PropsActionsAnswer> = ({rocketSound}) => {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isShowInput, setIsShowInput] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const dispatch = useDispatch()
    const answer = useSelector((state: AppRootStateType) => state.count.answer)

    const showInput = useCallback((isShowInput: boolean) => setIsShowInput(isShowInput), [])
    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

    return <>
        <ButtonBack callback={handleBackToSettings}/>
        {!isShowAnswer
            ? <Actions showInput={showInput} focusOnElement={focusOnElement}/>
            : <Answer answer={answer} inputAnswer={inputAnswer}/>
        }
        {isShowInput &&
        <AnswerInput inputAnswer={inputAnswer}
                     setInputAnswer={setInputAnswer}
                     showInput={showInput}
                     showAnswer={showAnswer}
                     rocketSound={rocketSound}
                     isFocus={isFocus}
                     focusOnElement={focusOnElement}
        />
        }
        <NavLink to={PATH.MAIN}>На главную</NavLink>
    </>
}

