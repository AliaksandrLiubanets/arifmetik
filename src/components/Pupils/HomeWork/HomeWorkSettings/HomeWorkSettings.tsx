import React, {FC} from 'react'
import s from '../../../SettingsBlock/Settings.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../../enums/paths'
import {SpeedCardsSettings} from '../../../commonComponents/CardsSettings/SpeedCardsSettings'
import {NumberOfCardsSettings} from '../../../commonComponents/CardsSettings/NumberOfCardsSettings'
import {NumberCompCardsSettings} from '../../../commonComponents/CardsSettings/NumberCompCardsSettings'

type HomeWorkSettingsType = {}

export const HomeWorkSettings: FC<HomeWorkSettingsType> = () => {

    return <div className={s.container}>
        <NavLink to={PATH.MAIN}>
            <button onClick={handleBackToSettings}>На главную</button>
        </NavLink>
        <div className={s.settings_frame}>
            <SpeedCardsSettings isSpeedOn={isSpeedOn}
                                speed={speed}
                                handleFocus={handleFocus}
                                onChangeTimeOutValue={onChangeTimeOutValue}
                                onChangeIsSpeedOn={onChangeIsSpeedOn}
            />
            <NumberOfCardsSettings changeCardNumber={changeCardNumber}/>
            <NumberCompCardsSettings handleFocus={handleFocus}
                                     onChangeFirstCardsComp={onChangeFirstCardsComp}
                                     onChangeSecondCardsComp={onChangeSecondCardsComp}
            />
        </div>
        <button onClick={startRocket}>
            Старт
        </button>
    </div>
}