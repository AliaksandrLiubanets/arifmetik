import React from 'react'
import s from './FlashCards.module.css'
import r_1 from '../../assets/flash-cards/1_r.png'
import r_2 from '../../assets/flash-cards/2_r.png'
import r_3 from '../../assets/flash-cards/3_r.png'

export const FlashCards = () => {
    return <div className={s.flash}>
            <div className={s.card}><img src={r_2} alt={'card'}/></div>
            <div className={s.card}><img src={r_3} alt={'card'}/></div>
        </div>
}