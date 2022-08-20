import React, {FC, memo} from 'react'

type Props = {
    isOnFocus: boolean
    callback: () => void
}
export const ButtonNext: FC<Props> = memo(({isOnFocus, callback}) => {
        return <button
            autoFocus={isOnFocus}
            onClick={callback}>Далее</button>
    }
)