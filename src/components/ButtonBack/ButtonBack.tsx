import React, {FC, memo} from 'react'

type Props = {
    callback: () => void
}
export const ButtonBack: FC<Props> = memo(({callback}) => {
        return <button onClick={callback}>Назад</button>
    }
)