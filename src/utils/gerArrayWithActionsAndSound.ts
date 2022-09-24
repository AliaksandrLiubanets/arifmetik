import plus_1 from '../assets/sounds/actions/+1.mp3'
import plus_2 from '../assets/sounds/actions/+2.mp3'
import plus_3 from '../assets/sounds/actions/+3.mp3'
import plus_4 from '../assets/sounds/actions/+4.mp3'
import plus_5 from '../assets/sounds/actions/+5.mp3'
import plus_6 from '../assets/sounds/actions/+6.mp3'
import plus_7 from '../assets/sounds/actions/+7.mp3'
import plus_8 from '../assets/sounds/actions/+8.mp3'
import plus_9 from '../assets/sounds/actions/+9.mp3'
import plus_10 from '../assets/sounds/actions/+10.mp3'
import plus_11 from '../assets/sounds/actions/+11.mp3'
import plus_12 from '../assets/sounds/actions/+12.mp3'
import plus_13 from '../assets/sounds/actions/+13.mp3'
import plus_14 from '../assets/sounds/actions/+14.mp3'
import plus_15 from '../assets/sounds/actions/+15.mp3'
import plus_16 from '../assets/sounds/actions/+16.mp3'
import plus_17 from '../assets/sounds/actions/+17.mp3'
import plus_18 from '../assets/sounds/actions/+18.mp3'
import plus_19 from '../assets/sounds/actions/+19.mp3'
import plus_20 from '../assets/sounds/actions/+20.mp3'

import minus_1 from '../assets/sounds/actions/-1.mp3'
import minus_2 from '../assets/sounds/actions/-2.mp3'
import minus_3 from '../assets/sounds/actions/-3.mp3'
import minus_4 from '../assets/sounds/actions/-4.mp3'
import minus_5 from '../assets/sounds/actions/-5.mp3'
import minus_6 from '../assets/sounds/actions/-6.mp3'
import minus_7 from '../assets/sounds/actions/-7.mp3'
import minus_8 from '../assets/sounds/actions/-8.mp3'
import minus_9 from '../assets/sounds/actions/-9.mp3'
import minus_10 from '../assets/sounds/actions/-10.mp3'
import minus_11 from '../assets/sounds/actions/-11.mp3'
import minus_12 from '../assets/sounds/actions/-12.mp3'
import minus_13 from '../assets/sounds/actions/-13.mp3'
import minus_14 from '../assets/sounds/actions/-14.mp3'
import minus_15 from '../assets/sounds/actions/-15.mp3'
import minus_16 from '../assets/sounds/actions/-16.mp3'
import minus_17 from '../assets/sounds/actions/-17.mp3'
import minus_18 from '../assets/sounds/actions/-18.mp3'
import minus_19 from '../assets/sounds/actions/-19.mp3'
import minus_20 from '../assets/sounds/actions/-20.mp3'

import wrist from '../../assets/sounds/actions/whistling.mp3'


export const getActionSoundStrAccordingActionStr = (action: string) => {
    let sound: () => void
    switch (action) {
        case '+1':
            sound = () => p_1()
            break
        case '+2':
            sound = () => p_2()
            break
        case '+3':
            sound = () => p_3()
            break
        case '+4':
            sound = () => p_4()
            break
        case '+5':
            sound = () => p_5()
            break
        case '+6':
            sound = () => p_6()
            break
        case '+7':
            sound = () => p_7()
            break
        case '+8':
            sound = () => p_8()
            break
        case '+9':
            sound = () => p_9()
            break
        case '+10':
            sound = () => p_10()
            break
        case '+11':
            sound = () => p_11()
            break
        case '+12':
            sound = () => p_12()
            break
        case '+13':
            sound = () => p_13()
            break
        case '+14':
            sound = () => p_14()
            break
        case '+15':
            sound = () => p_15()
            break
        case '+16':
            sound = () => p_16()
            break
        case '+17':
            sound = () => p_17()
            break
        case '+18':
            sound = () => p_18()
            break
        case '+19':
            sound = () => p_19()
            break
        case '+20':
            sound = () => p_20()
            break
        case '-1':
            sound = () => m_1()
            break
        case '-2':
            sound = () => m_2()
            break
        case '-3':
            sound = () => m_3()
            break
        case '-4':
            sound = () => m_4()
            break
        case '-5':
            sound = () => m_5()
            break
        case '-6':
            sound = () => m_6()
            break
        case '-7':
            sound = () => m_7()
            break
        case '-8':
            sound = () => m_8()
            break
        case '-9':
            sound = () => m_9()
            break
        case '-10':
            sound = () => m_10()
            break
        case '-11':
            sound = () => m_11()
            break
        case '-12':
            sound = () => m_12()
            break
        case '-13':
            sound = () => m_13()
            break
        case '-14':
            sound = () => m_14()
            break
        case '-15':
            sound = () => m_15()
            break
        case '-16':
            sound = () => m_16()
            break
        case '-17':
            sound = () => m_17()
            break
        case '-18':
            sound = () => m_18()
            break
        case '-19':
            sound = () => m_19()
            break
        case '-20':
            sound = () => m_20()
            break
        default:
            sound = () => w()
    }
    return sound
}

// export const makeArrayWithActionsAndSound = (array: string[]) => {
//     let actionsAndSoundsArray: ActionAndSoundType[]
//     actionsAndSoundsArray = array.map((action: string) => {
//         const sound: string = getActionSoundStrAccordingActionStr(action)
//         return {action, sound}
//     })
//
//     return actionsAndSoundsArray
// }
