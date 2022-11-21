import React, {FC, memo} from 'react'

type Props = {
    isOnFocus: boolean
    callback: () => void
    isDisableButton?: boolean
}
export const ButtonNext: FC<Props> = memo(({isOnFocus, callback, isDisableButton}) => {
        const isDisabled = isDisableButton && isDisableButton

        return <div>
            <button autoFocus={isOnFocus} onClick={callback} disabled={isDisabled}>Далее</button>
        </div>
    }
)