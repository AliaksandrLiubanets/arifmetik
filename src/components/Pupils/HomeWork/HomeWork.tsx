import s from './HomeWork.module.css'
import dominoes from '../../../assets/main-icons/dominoes_2.jpg'
import digits from '../../../assets/main-icons/digits_1.jpg'
import React, {FC, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType, setStartHWDoing} from '../../../store/homeWorkReducer'
import {
    setCardSpeed,
    setFirstCardsComp,
    setIsSpeedOn,
    setNumberOfFlashCards,
    setSecondCardsComp
} from '../../../store/flashCardsGameReducer'
import {setActionsCount, setNumberComp, setSpeed, switchSound} from '../../../store/countGameReducer'
import {NavLink, useLocation} from 'react-router-dom'
import {PATH} from '../../../enums/paths'
import {HeadButtons} from '../../commonComponents/HeadButtons/HeadButtons'
import {FinishedHomework} from '../../commonComponents/FinishedHomework/FinishedHomework'
import check_mark from '../../../assets/main-icons/check-mark.png'


export const HomeWork: FC = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {homeWork, currentUserId} = useSelector((state: AppRootStateType) => state.homework)

    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    }

    const cards = homeWork[index].cards
    const cardsTasks = cards.tasks
    const numberOfCardsExercises = cards.numberOfExercises

    const count = homeWork[index].count
    const countTasks = count.tasks
    const numberOfCountExercises = count.numberOfExercises

    // find rightAnswerAmount with userId === currentUserId
    let rightAnswerAmountOfCards
    if (currentUserId === homeWork[index].userId) rightAnswerAmountOfCards = cardsTasks.filter(task => task.isDone).length
    let rightAnswerAmountOfCount
    if (currentUserId === homeWork[index].userId) rightAnswerAmountOfCount = countTasks.filter(task => task.isDone).length

    const {
        firstCardsCompositionHW,
        secondCardsCompositionHW,
        numberOfFlashCardsHW,
        isSpeedOnHW,
        speedCardsHW
    } = homeWork[index].cards

    const {
        numberComposition,
        isVoiceOn,
        speedCount,
        actionsAmount
    } = homeWork[index].count

    const onChangeCardsTimeOutValue = useCallback(() => {
        dispatch(setCardSpeed({speedCards: speedCardsHW}))
    }, [dispatch, speedCardsHW])
    const onChangeIsSpeedOn = useCallback(() => {
        dispatch(setIsSpeedOn({isSpeedOn: isSpeedOnHW}))
    }, [dispatch, isSpeedOnHW])
    const changeCardNumber = useCallback(() => {
        dispatch(setNumberOfFlashCards({numberOfFlashCards: numberOfFlashCardsHW}))
    }, [dispatch, numberOfFlashCardsHW])
    const onChangeFirstCardsComp = useCallback(() => {
        dispatch(setFirstCardsComp({firstCardsComposition: firstCardsCompositionHW}))
    }, [dispatch, firstCardsCompositionHW])
    const onChangeSecondCardsComp = useCallback(() => {
        dispatch(setSecondCardsComp({secondCardsComposition: secondCardsCompositionHW}))
    }, [dispatch, secondCardsCompositionHW])

    const onChangeCountNumberComp = useCallback(() => {
        dispatch(setNumberComp({numberComposition: numberComposition}))
    }, [dispatch, numberComposition])
    const onChangeCountTimeOutValue = useCallback(() => {
        dispatch(setSpeed({speed: speedCount}))
    }, [dispatch, speedCount])
    const onChangeCountActionsCount = useCallback(() => {
        dispatch(setActionsCount({actionsAmount}))
    }, [dispatch, actionsAmount])
    const onChangeSound = useCallback(() => {
        dispatch(switchSound({isSoundOn: isVoiceOn}))
    }, [dispatch, isVoiceOn])

    useEffect(() => {
        onChangeCardsTimeOutValue()
        onChangeIsSpeedOn()
        changeCardNumber()
        onChangeFirstCardsComp()
        onChangeSecondCardsComp()
        onChangeCountNumberComp()
        onChangeCountTimeOutValue()
        onChangeCountActionsCount()
        onChangeSound()
    }, [currentUserId, onChangeCardsTimeOutValue, onChangeIsSpeedOn, changeCardNumber, onChangeFirstCardsComp,
        onChangeSecondCardsComp, onChangeCountNumberComp, onChangeCountTimeOutValue, onChangeCountActionsCount, onChangeSound])

    const isShowAnswers = location.pathname.includes('homework')
    const isCardsHomeworkFinished = numberOfCardsExercises === rightAnswerAmountOfCards
    const finishCardsHW = isShowAnswers && isCardsHomeworkFinished

    const isCountHomeworkFinished = numberOfCountExercises === rightAnswerAmountOfCount
    const finishCountHW = isShowAnswers && isCountHomeworkFinished

    const stopHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: false}))
    const startHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: true}))

    // disable link if finishCardsHW:
    const makeStyleForLink = (finish: boolean) => {
        let linkStyle: string
        if (finish) {
            linkStyle = `${s.link}`
        } else {
            linkStyle = ''
        }
        return linkStyle
    }

    // cursor: default if finishCardsHW:
    const makeStyleForIcon = (finish: boolean) => {
        let iconStyle: string
        if (finish) {
            iconStyle = ''
        } else {
            iconStyle = `${s.icon}`
        }
        return iconStyle
    }

    const styleForCardsLink = makeStyleForLink(finishCardsHW)
    const styleForCountLink = makeStyleForLink(finishCountHW)
    const styleForCardsIcon = makeStyleForIcon(finishCardsHW)
    const styleForCountIcon = makeStyleForIcon(finishCountHW)

    const text = 'Домашнее задание выполнено!'

    return <div className={s.container}>
        <HeadButtons callBack={stopHWDoing}/>
        <div className={s.content}>
            <div className={styleForCardsIcon}>
                <div className={s.block}>
                    <NavLink to={PATH.HOMEWORK_FLASH} className={styleForCardsLink}>
                        <div className={s.item}
                             onClick={startHWDoing}
                        >
                            <div>Флэшкарты</div>
                            <img src={dominoes} alt={'dominoes_icon'}/>
                        </div>
                    </NavLink>
                    {finishCardsHW && <img className={s.check_mark} src={check_mark} alt={'finished'}/>}
                </div>
            </div>
            <div className={styleForCountIcon}>
                <div className={s.block}>
                    <NavLink to={PATH.HOMEWORK_COUNT} className={styleForCountLink}>
                        <div className={s.item}
                             onClick={startHWDoing}
                        >
                            <div>Счёт</div>
                            <img src={digits} alt={'digits_icon'}/>

                        </div>
                    </NavLink>
                    {finishCountHW && <img className={s.check_mark} src={check_mark} alt={'finished'}/>}
                </div>
            </div>
        </div>
        <div className={s.finish}>
            {finishCardsHW && finishCountHW && <FinishedHomework text={text}/>}
        </div>
    </div>
}


