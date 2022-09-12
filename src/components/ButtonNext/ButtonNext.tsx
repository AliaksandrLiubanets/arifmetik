import React, {FC, memo} from 'react'

type Props = {
    isOnFocus: boolean
    callback: () => void
}
export const ButtonNext: FC<Props> = memo(({isOnFocus, callback}) => {
        return <div>
            <button autoFocus={isOnFocus} onClick={callback}>Далее</button>
        </div>
    }
)