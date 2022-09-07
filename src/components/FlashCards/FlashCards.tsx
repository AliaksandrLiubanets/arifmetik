import React from 'react'
import s from './FlashCards.module.css'
import r_2 from '../../assets/flash-cards/9_r_4_3_2.png'
import r_3 from '../../assets/flash-cards/9_r_4_2_3.png'

export const FlashCards = () => {
    return <div className={s.flash}>
            <div className={s.card}><img src={r_2} alt={'card'}/></div>
            <div className={s.card}><img src={r_3} alt={'card'}/></div>
        </div>
}