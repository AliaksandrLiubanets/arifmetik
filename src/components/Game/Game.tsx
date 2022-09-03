import React, {FC, memo} from 'react'
import s from '../Game/Game.module.css'
import {PreStart} from '../PreStart/PreStart'
import {ActionsAnswer} from '../ActionsAnswer/ActionsAnswer'

type Props = {
    numberComp: number
    timeoutValue: number
    // actionsCount: number
    startGame: (isStarted: boolean) => void
    // makeActionsArrayAndAnswer: () => void
    actionsArray: string[]
    answer: number
    isSoundOn: boolean
    isPrestart: boolean
    setIsPrestart: (isPreStart: boolean) => void
    rocketSound: () => void
}

export const Game: FC<Props> = memo(({
                                         numberComp,
                                         timeoutValue,
                                         // actionsCount,
                                         startGame,
                                         actionsArray,
                                         answer,
                                         isSoundOn,
                                         // makeActionsArrayAndAnswer,
                                         isPrestart,
                                         setIsPrestart,
                                         rocketSound
                                     }) => {


        return (
            <div className={s.game}>
                {isPrestart
                    ? <PreStart startGame={startGame}
                                setIsPrestart={setIsPrestart}
                                isPrestart={isPrestart}
                    />
                    : <ActionsAnswer
                        // answer={answer}
                        // isSoundOn={isSoundOn}
                        // actionsCount={actionsCount}
                        // actionsArray={actionsArray}
                        // makeActionsArrayAndAnswer={makeActionsArrayAndAnswer}
                        // timeoutValue={timeoutValue}
                        setIsPrestart={setIsPrestart}
                        // numberComp={numberComp}
                        rocketSound={rocketSound}
                        startGame={startGame}
                    />
                }
            </div>
        )
    }
)

