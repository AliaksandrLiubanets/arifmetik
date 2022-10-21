import {ChangeEvent, FC, FocusEvent} from 'react'
import s from '../../SettingsBlock/Settings.module.css'

type NumberCompCountSettingsType = {
    numberComposition: number
    onChangeNumberComp: (e: ChangeEvent<HTMLInputElement>) => void
    handleFocus: (e: FocusEvent<HTMLInputElement>) => void
}

export const NumberCompCountSettings: FC<NumberCompCountSettingsType> = ({numberComposition, onChangeNumberComp, handleFocus}) => {
    return <div className={s.settings_item}>
        <div>Состав числа:</div>
        <input
            value={numberComposition}
            type="number"
            onChange={onChangeNumberComp}
           onFocus={handleFocus}
       />
    </div>

}