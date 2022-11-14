import React, {FC, useCallback, useState} from 'react'
import {Actions} from '../Actions/Actions'
import {useDispatch, useSelector} from 'react-redux'
import {ButtonBack} from '../ButtonBack/ButtonBack'
import {PATH} from '../../enums/paths'
import {NavLink, useLocation} from 'react-router-dom'
import {startGame} from '../../store/appReducer'
import p from '../GameStyles/GameStyles.module.css'
import {AnswerInput} from '../commonComponents/AnswerInput/AnswerInput'
import {AppRootStateType} from '../../store/store'
import {RightAnswerCount} from '../commonComponents/RightAnswerCount/RightAnswerCount'
import {HomeWorkType, setStartHWDoing} from '../../store/homeWorkReducer'


export const ActionsAndAnsewrInput: FC = () => {
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [inputAnswer, setInputAnswer] = useState(0)
    const [isFocus, setIsFocus] = useState(true)
    const location = useLocation()

    const dispatch = useDispatch()
    const showAnswer = useCallback((isShowInput: boolean) => setIsShowAnswer(isShowInput), [])
    const focusOnElement = useCallback((isFocus: boolean) => setIsFocus(isFocus), [])
    // const handleBackToSettings = useCallback(() => dispatch(startGame({isStarted: false})), [dispatch])
    const {currentUserId, homeWork} = useSelector((state: AppRootStateType) => state.homework)
    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) =>  data.userId === currentUserId )
    }
    const tasks = homeWork[index].count.tasks

    const stopHWDoing = useCallback(() => dispatch(setStartHWDoing({isStartHWDoing: false})), [dispatch])
    const handleBackToSettings = useCallback(() => {
        dispatch(startGame({isStarted: false}))
        stopHWDoing()
    }, [dispatch,
        stopHWDoing
    ])

    const isShowAnswersCount = location.pathname.includes('homework')

    return <div className={p.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <ButtonBack callback={handleBackToSettings}/>
        {
            isShowAnswersCount && <RightAnswerCount tasks={tasks} />
        }
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

