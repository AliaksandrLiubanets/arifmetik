import React, {FC, useCallback, useState} from 'react'
import {Actions} from '../Actions/Actions'
import {useDispatch} from 'react-redux'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import p from '../GameStyles/GameStyles.module.css'
import {AnswerInput} from '../commonComponents/AnswerInput/AnswerInput'


export const Count: FC = () => {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const dispatch = useDispatch()

    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        {!isShowAnswer
            ? <Actions setIsShowAnswer={setIsShowAnswer} focusOnElement={focusOnElement}/>
            : <AnswerInput inputAnswer={inputAnswer}
                           setInputAnswer={setInputAnswer}
                           showAnswer={showAnswer}
                           isFocus={isFocus}
                           focusOnElement={focusOnElement}
            />
        }
    </div>
}

