import React, {FC, useCallback, useState} from 'react'
import {Actions} from '../Actions/Actions'
import {useDispatch} from 'react-redux'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {AnswerInput} from './AnswerInput'
import {PATH} from '../../enums/paths'
import {NavLink} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import p from '../GameStyles/GameStyles.module.css'


export const Count: FC = () => {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isShowInput, setIsShowInput] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    const dispatch = useDispatch()

    const showInput = useCallback((isShowInput: boolean) => setIsShowInput(isShowInput), [])
    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])
    const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        {!isShowAnswer
            ? <Actions showInput={showInput} focusOnElement={focusOnElement} />
            : <AnswerInput inputAnswer={inputAnswer}
                           setInputAnswer={setInputAnswer}
                           showAnswer={showAnswer}
                           isFocus={isFocus}
                           focusOnElement={focusOnElement}
            />
            // ? <Actions showInput={showInput} focusOnElement={focusOnElement}/>
            // : <Answer answer={answer} inputAnswer={inputAnswer}/>
        }
        {/*{isShowInput &&*/}
        {/*<AnswerInput inputAnswer={inputAnswer}*/}
        {/*             setInputAnswer={setInputAnswer}*/}
        {/*             showInput={showInput}*/}
        {/*             showAnswer={showAnswer}*/}
        {/*             isFocus={isFocus}*/}
        {/*             focusOnElement={focusOnElement}*/}
        {/*/>*/}
        {/*}*/}
    </div>
}

