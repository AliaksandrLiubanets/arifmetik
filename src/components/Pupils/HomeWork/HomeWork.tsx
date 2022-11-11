import s from './HomeWork.module.css'
import dominoes from '../../../assets/main-icons/dominoes_2.jpg'
import digits from '../../../assets/main-icons/digits_1.jpg'
import React, {FC, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {HomeWorkType} from '../../../store/homeWorkReducer'
import {
    setCardSpeed,
    setFirstCardsComp,
    setIsSpeedOn,
    setNumberOfFlashCards,
    setSecondCardsComp
} from '../../../store/flashCardsGameReducer'
import {setActionsCount, setNumberComp, setSpeed, switchSound} from '../../../store/countGameReducer'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../enums/paths'
import {HeadButtons} from '../../commonComponents/HeadButtons/HeadButtons'


export const HomeWork: FC = () => {
    const dispatch = useDispatch()
    const {homeWork, currentUserId} = useSelector((state: AppRootStateType) => state.homework)
    let index: number
    if (!currentUserId) {
        index = 1
    } else {
        index = homeWork.findIndex((data: HomeWorkType) =>  data.userId === currentUserId )
    }

    const {
        firstCardsCompositionHW,
        secondCardsCompositionHW,
        numberOfFlashCardsHW,
        isSpeedOnHW,
        // numberOfCardsExercises,
        speedCardsHW
    } = homeWork[index].cards

    const {
        numberComposition,
        isVoiceOn,
        speedCount,
        // numberOfCountExercises,
        actionsCount
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
        dispatch(setActionsCount({actionsCount: actionsCount}))
    }, [dispatch, actionsCount])
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

    const stopHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: false}))
    const startHWDoing = () => dispatch(setStartHWDoing({isStartHWDoing: true}))

    return <div className={s.container}>
        <HeadButtons callBack={stopHWDoing}/>
        <div className={s.content}>
            <div className={s.icon}>
                <NavLink to={PATH.FLASH}>
                    <div className={s.item}
                         onClick={startHWDoing}
                    >
                        <div>Задание</div>
                        <img src={dominoes} alt={'dominoes_icon'}/>
                        <div>Флэшкарты</div>
                    </div>
                </NavLink>
            </div>
            <div className={s.icon}>
                <NavLink to={PATH.COUNT}>
                    <div className={s.item}
                         onClick={startHWDoing}
                    >
                        <div>Задание</div>
                        <img src={digits} alt={'digits_icon'}/>
                        <div>Счёт</div>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
}
