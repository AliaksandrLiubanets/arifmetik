import React from 'react'
import s from './FlashCards.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'

import f_0 from '../../assets/flash-cards/0_r_0.png'
import f_1 from '../../assets/flash-cards/1_r_1.png'
import f_2 from '../../assets/flash-cards/2_r_2.png'
import f_3 from '../../assets/flash-cards/3_r_3.png'
import f_2_1 from '../../assets/flash-cards/3_r_2_1.png'
import f_1_2 from '../../assets/flash-cards/3_r_1_2.png'
import f_4 from '../../assets/flash-cards/4_r_4.png'
import f_1_3 from '../../assets/flash-cards/4_r_1_3.png'
import f_3_1 from '../../assets/flash-cards/4_r_3_1.png'
import f_2_2 from '../../assets/flash-cards/4_r_2_2.png'

import f_2_3 from '../../assets/flash-cards/5_r_2_3.png'
import f_3_2 from '../../assets/flash-cards/5_r_3_2.png'
import f_4_1 from '../../assets/flash-cards/5_r_4_1.png'
import f_1_4 from '../../assets/flash-cards/5_r_1_4.png'

import f_3_3 from '../../assets/flash-cards/6_r_3_3.png'
import f_2_4 from '../../assets/flash-cards/6_r_2_4.png'
import f_4_2 from '../../assets/flash-cards/6_r_4_2.png'
import f_2_2_2 from '../../assets/flash-cards/6_r_2_2_2.png'

import f_2_2_3 from '../../assets/flash-cards/7_r_2_2_3.png'
import f_2_3_2 from '../../assets/flash-cards/7_r_2_3_2.png'
import f_3_2_2 from '../../assets/flash-cards/7_r_3_2_2.png'
import f_4_3 from '../../assets/flash-cards/7_r_4_3.png'
import f_3_4 from '../../assets/flash-cards/7_r_3_4.png'

import f_4_4 from '../../assets/flash-cards/8_r_4_4.png'
import f_2_3_3 from '../../assets/flash-cards/8_r_2_3_3.png'
import f_3_2_3 from '../../assets/flash-cards/8_r_3_2_3.png'
import f_3_3_2 from '../../assets/flash-cards/8_r_3_3_2.png'
import f_2_2_4 from '../../assets/flash-cards/8_r_2_2_4.png'
import f_2_4_2 from '../../assets/flash-cards/8_r_2_4_2.png'
import f_4_2_2 from '../../assets/flash-cards/8_r_4_2_2.png'

import f_4_2_3 from '../../assets/flash-cards/9_r_4_2_3.png'
import f_4_3_2 from '../../assets/flash-cards/9_r_4_3_2.png'
import f_3_2_4 from '../../assets/flash-cards/9_r_3_2_4.png'
import f_3_4_2 from '../../assets/flash-cards/9_r_3_4_2.png'
import f_3_3_3 from '../../assets/flash-cards/9_r_3_3_3.png'
import f_2_3_4 from '../../assets/flash-cards/9_r_2_3_4.png'
import f_2_4_3 from '../../assets/flash-cards/9_r_2_4_3.png'

import f_4_4_2 from '../../assets/flash-cards/10_r_4_4_2.png'
import f_2_4_4 from '../../assets/flash-cards/10_r_2_4_4.png'
import f_4_2_4 from '../../assets/flash-cards/10_r_4_2_4.png'
import f_3_4_3 from '../../assets/flash-cards/10_r_3_4_3.png'
import f_4_3_3 from '../../assets/flash-cards/10_r_4_3_3.png'
import f_3_3_4 from '../../assets/flash-cards/10_r_3_3_4.png'
import f_3_3_2_2 from '../../assets/flash-cards/10_r_3_3_2_2.png'
import f_3_2_3_2 from '../../assets/flash-cards/10_r_3_2_3_2.png'
import f_3_2_2_3 from '../../assets/flash-cards/10_r_3_2_2_3.png'
import f_2_3_3_2 from '../../assets/flash-cards/10_r_2_3_3_2.png'
import f_2_3_2_3 from '../../assets/flash-cards/10_r_2_3_2_3.png'
import {setCard} from '../../store/flashCardsGameReducer'


export const FlashCards = () => {

    const card = useSelector((state: AppRootStateType) => state.cards.flashCard)
    let flashCard: string

    switch (card) {
        case '0':
            flashCard = f_0
            break
        case '1':
            flashCard = f_1
            break
        case '2':
            flashCard = f_2
            break

        case '3':
            flashCard = f_3
            break
        case '2_1':
            flashCard = f_2_1
            break
        case '1_2':
            flashCard = f_1_2
            break

        case '4':
            flashCard = f_4
            break
        case '1_3':
            flashCard = f_1_3
            break
        case '3_1':
            flashCard = f_3_1
            break
        case '2_2':
            flashCard = f_2_2
            break

        case '2_3':
            flashCard = f_2_3
            break
        case '3_2':
            flashCard = f_3_2
            break
        case '4_1':
            flashCard = f_4_1
            break
        case '1_4':
            flashCard = f_1_4
            break

        case '3_3':
            flashCard = f_3_3
            break
        case '4_2':
            flashCard = f_4_2
            break
        case '2_4':
            flashCard = f_2_4
            break
        case '2_2_2':
            flashCard = f_2_2_2
            break

        case '2_2_3':
            flashCard = f_2_2_3
            break
        case '2_3_2':
            flashCard = f_2_3_2
            break
        case '3_2_2':
            flashCard = f_3_2_2
            break
        case '3_4':
            flashCard = f_3_4
            break
        case '4_3':
            flashCard = f_4_3
            break


        case '4_4':
            flashCard = f_4_4
            break
        case '2_3_3':
            flashCard = f_2_3_3
            break
        case '3_2_3':
            flashCard = f_3_2_3
            break
        case '3_3_2':
            flashCard = f_3_3_2
            break
        case '4_2_2':
            flashCard = f_4_2_2
            break
        case '2_2_4':
            flashCard = f_2_2_4
            break
        case '2_4_2':
            flashCard = f_2_4_2
            break

        case '4_2_3':
            flashCard = f_4_2_3
            break
        case '4_3_2':
            flashCard = f_4_3_2
            break
        case '3_2_4':
            flashCard = f_3_2_4
            break
        case '3_4_2':
            flashCard = f_3_4_2
            break
        case '3_3_3':
            flashCard = f_3_3_3
            break
        case '2_3_4':
            flashCard = f_2_3_4
            break
        case '2_4_3':
            flashCard = f_2_4_3
            break

        case '4_4_2':
            flashCard = f_4_4_2
            break
        case '2_4_4':
            flashCard = f_2_4_4
            break
        case '4_2_4':
            flashCard = f_4_2_4
            break
        case '3_4_3':
            flashCard = f_3_4_3
            break
        case '4_3_3':
            flashCard = f_4_3_3
            break
        case '3_3_4':
            flashCard = f_3_3_4
            break
        case '3_3_2_2':
            flashCard = f_3_3_2_2
            break
        case '3_2_3_2':
            flashCard = f_3_2_3_2
            break
        case '3_2_2_3':
            flashCard = f_3_2_2_3
            break
        case '2_3_3_2':
            flashCard = f_2_3_3_2
            break
        case '2_3_2_3':
            flashCard = f_2_3_2_3
            break
        default:
            flashCard = f_0
    }

    const dispatch = useDispatch()
    const nextFlashCard = () => dispatch(setCard())

    return <div className={s.flash}>
        <div className={s.card}><img src={flashCard} alt={'card'}/></div>
        {/*<div className={s.card}><img src={r_3} alt={'card'}/></div>*/}
        <div>
            <button onClick={nextFlashCard}>Далее</button>
        </div>
    </div>
}