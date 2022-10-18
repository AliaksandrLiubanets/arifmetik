import {FC, memo} from 'react'
import {Pupil} from '../Pupil/Pupil'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../store/store'


export const PupilsList: FC = memo(() => {

    const pupils = useSelector((state: AppRootStateType) => state.pupils.pupils)

    return <>
        {
            pupils.map(pupil => <Pupil
                key={pupil.id} pupil={pupil}
            />)
        }
    </>
})