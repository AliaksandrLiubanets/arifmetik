import React, {ChangeEvent, useState} from 'react'
import {SumGame} from './SumGame'
import {DifferenceGame} from './DifferenceGame'
import {Game} from './Game'

type CountType = 'сложение' | 'вычитание' | 'комбинированные'
const typeCountArr: CountType[] = ['комбинированные', 'сложение', 'вычитание']

export const Settings = React.memo(() => {
        const [numberComp, setNumberComp] = React.useState(100)
        const [timeoutValue, setTimeoutValue] = React.useState(1)
        const [actionsCount, setActionsCount] = React.useState(5)
        const [restart, setRestart] = React.useState(false)

        const [typeOfCount, setTypeOfCount] = useState<string>('комбинированные')


        const onChangeNumberComposition = (e: ChangeEvent<HTMLInputElement>) => {
            setNumberComp(+e.currentTarget.value)
        }
        const onChangeSpeed = (e: ChangeEvent<HTMLInputElement>) => {
            setTimeoutValue(+e.currentTarget.value)
        }
        const onChangeNumberOfActions = (e: ChangeEvent<HTMLInputElement>) => {
            setActionsCount(+e.currentTarget.value)
        }
        const onChangeOptionCount = (e: ChangeEvent<HTMLSelectElement>) => {
            setRestart(false)
            setTypeOfCount(e.currentTarget.value)
        }
        const mappedOptions: any[] = typeCountArr.map((o, i) => <option key={i} value={o}>{o}</option>)

        return <div>
            <h4>Состав числа:</h4>
            <input type={'number'} onChange={onChangeNumberComposition} value={+numberComp}/>
            <h4>Скорость вывода:</h4>
            <input type={'number'} onChange={onChangeSpeed} value={+timeoutValue}/>
            <h4>Количество действий:</h4>
            <input type={'number'} onChange={onChangeNumberOfActions} value={+actionsCount}/>
            <h4>Тип вычислений:</h4>
            <select onChange={onChangeOptionCount}>
                {mappedOptions}
            </select>
            <div>
                <button onClick={() => setRestart(!restart)}>СТАРТ</button>
            </div>
            {
                typeOfCount === 'сложение' &&
                <SumGame speed={timeoutValue} numberComposition={numberComp} numberOfActions={actionsCount}
                         restart={restart}/>
            }
            {
                typeOfCount === 'вычитание' &&
                <DifferenceGame speed={timeoutValue} numberComposition={numberComp} numberOfActions={actionsCount}
                                restart={restart}/>
            }
            {
                typeOfCount === 'комбинированные' &&
                <Game timeoutValue={timeoutValue} numberComp={numberComp} actionsCount={actionsCount}
                      restart={restart} />
            }
        </div>
    }
)
