import s from './HomeWork.module.css'
import dominoes from '../../../assets/main-icons/dominoes_2.jpg'
import digits from '../../../assets/main-icons/digits_1.jpg'
import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType, setStartHWDoing} from '../../../store/homeWorkReducer'
import {
    setFirstCardsComp,
    setIsSpeedOn,
    setNumberOfFlashCards,
    setSecondCardsComp,
    setSpeed
} from '../../../store/flashCardsGameReducer'
import {setActionsCount, setNumberComp, switchSound} from '../../../store/countGameReducer'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../enums/paths'


export const HomeWork: FC = () => {

    const {homeWork, currentUserId} = useSelector((state: AppRootStateType) => state.homework)
    const index = homeWork.findIndex((data: HomeWorkType) => data.userId === currentUserId)
    const {
        firstCardsComposition,
        secondCardsComposition,
        numberOfFlashCards,
        isSpeedOn,
        numberOfCardsExercises,
        speedCards
    } = homeWork[index].cards

    const {
        numberComposition,
        isVoiceOn,
        speedCount,
        numberOfCountExercises,
        actionsCount
    } = homeWork[index].count

    const dispatch = useDispatch()

    const onChangeCardsTimeOutValue = () => dispatch(setSpeed({speed: speedCards}))
    const onChangeIsSpeedOn = () => dispatch(setIsSpeedOn({isSpeedOn: isSpeedOn}))
    const changeCardNumber = () => dispatch(setNumberOfFlashCards({numberOfFlashCards: numberOfFlashCards}))
    const onChangeFirstCardsComp = () => dispatch(setFirstCardsComp({firstCardsComposition: firstCardsComposition}))
    const onChangeSecondCardsComp = () => dispatch(setSecondCardsComp({secondCardsComposition: secondCardsComposition}))

    const onChangeCountNumberComp = () => dispatch(setNumberComp({numberComposition: numberComposition}))
    const onChangeCountTimeOutValue = () => dispatch(setSpeed({speed: speedCount}))
    const onChangeCountActionsCount = () => dispatch(setActionsCount({actionsCount: actionsCount}))
    const onChangeSound = () => dispatch(switchSound({isSoundOn: isVoiceOn}))

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
    }, [currentUserId])

    const startHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: true}))

    return <div className={s.content}>
        <div className={s.icon}>
            <NavLink to={PATH.FLASH}>
                <div className={s.item} onClick={() => {startHWDoing()}}>
                    <div>Задание</div>
                    <img src={dominoes} alt={'dominoes_icon'}/>
                    <div>Флэшкарты</div>
                </div>
            </NavLink>
        </div>
        <div className={s.icon}>
            <NavLink to={PATH.COUNT}>
                <div className={s.item} onClick={() => {startHWDoing()}}>
                    <div>Задание</div>
                    <img src={digits} alt={'digits_icon'}/>
                    <div>Счёт</div>
                </div>
            </NavLink>
        </div>
    </div>
}
