import React, {FC} from 'react'

type Props = {
    isOnFocus: boolean
    callback: () => void
}
export const ButtonNext: FC<Props> = ({isOnFocus, callback}) => {
    return <button
        autoFocus={isOnFocus}
        onClick={callback}>Далее</button>
}