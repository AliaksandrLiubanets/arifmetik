import {FC, memo} from 'react'
import {Pupil} from '../Pupil/Pupil'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'

type PupilsListPropsType = {
    handleUserId: (userId: number | null) => void
}

export const PupilsList: FC<PupilsListPropsType> = memo(({handleUserId}) => {

    const pupils = useSelector((state: AppRootStateType) => state.auth.authData)

    return <>
        {
            pupils.map(pupil => <Pupil handleUserId={handleUserId} key={pupil.id} pupil={pupil}/>)
        }
    </>
})