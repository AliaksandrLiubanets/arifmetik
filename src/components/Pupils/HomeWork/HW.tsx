import cardsImage from '../../../assets/main-icons/dominoes_2.jpg'
import countImage from '../../../assets/main-icons/digits_1.jpg'
import s from './HW.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../enums/paths'

export const HW = () => {
    return <div className={s.container}>
        <NavLink to={PATH.FLASH}>
            <div className={s.item}>
                <img src={cardsImage} alt={'cards-icon'}/>
            </div>
        </NavLink>
        <NavLink to={PATH.COUNT}>
            <div className={s.item}>
                <img src={countImage} alt={'count-icon'}/>
            </div>
        </NavLink>
    </div>
}