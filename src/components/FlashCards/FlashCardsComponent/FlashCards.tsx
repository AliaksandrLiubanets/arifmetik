import React, {FC, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'
import {getPictureAccordingStrNumber} from '../../../utils/getPictureAccordingStrNumber'
import s from '../FlashCards.module.css'

type Props = {
    focusOnElement?: (focus: boolean) => void
    showAnswer?: (isShowAnswer: boolean) => void
}

export const FlashCards: FC<Props> = ({focusOnElement, showAnswer}) => {

    const {
        firstFlashCard,
        secondFlashCard,
        numberOfFlashCards,
        speed
    } = useSelector((state: AppRootStateType) => state.cards)
    let card: string = getPictureAccordingStrNumber(firstFlashCard)
    let secondCard: string = getPictureAccordingStrNumber(secondFlashCard)

    useEffect(() => {
        showAnswer && showAnswer(false)
        let id: ReturnType<typeof setTimeout>
        id = setTimeout(() => {
            showAnswer && showAnswer(true)
            focusOnElement && focusOnElement(true)
        }, 1000 * speed)

        return () => {
            clearInterval(id)
        }

    }, [speed])


    return <div className={s.flash}>

        <div className={s.card}><img src={card} alt={'card'}/></div>
        {
            numberOfFlashCards === 2 &&
            <div className={s.card}><img src={secondCard} alt={'card'}/></div>
        }
    </div>
}