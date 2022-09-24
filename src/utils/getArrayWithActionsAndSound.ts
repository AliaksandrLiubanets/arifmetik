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

import wrist from '../assets/sounds/actions/whistling.mp3'


export const getActionSoundStrAccordingActionStr = (action: string) => {
    let sound: string
    switch (action) {
        case '+1':
            sound = plus_1
            break
        case '+2':
            sound = plus_2
            break
        case '+3':
            sound = plus_3
            break
        case '+4':
            sound = plus_4
            break
        case '+5':
            sound = plus_5
            break
        case '+6':
            sound = plus_6
            break
        case '+7':
            sound = plus_7
            break
        case '+8':
            sound = plus_8
            break
        case '+9':
            sound = plus_9
            break
        case '+10':
            sound = plus_10
            break
        case '+11':
            sound = plus_11
            break
        case '+12':
            sound = plus_12
            break
        case '+13':
            sound = plus_13
            break
        case '+14':
            sound = plus_14
            break
        case '+15':
            sound = plus_15
            break
        case '+16':
            sound = plus_16
            break
        case '+17':
            sound = plus_17
            break
        case '+18':
            sound = plus_18
            break
        case '+19':
            sound = plus_19
            break
        case '+20':
            sound = plus_20
            break
        case '-1':
            sound = minus_1
            break
        case '-2':
            sound = minus_2
            break
        case '-3':
            sound = minus_3
            break
        case '-4':
            sound = minus_4
            break
        case '-5':
            sound = minus_5
            break
        case '-6':
            sound = minus_6
            break
        case '-7':
            sound = minus_7
            break
        case '-8':
            sound = minus_8
            break
        case '-9':
            sound = minus_9
            break
        case '-10':
            sound = minus_10
            break
        case '-11':
            sound = minus_11
            break
        case '-12':
            sound = minus_12
            break
        case '-13':
            sound = minus_13
            break
        case '-14':
            sound = minus_14
            break
        case '-15':
            sound = minus_15
            break
        case '-16':
            sound = minus_16
            break
        case '-17':
            sound = minus_17
            break
        case '-18':
            sound = minus_18
            break
        case '-19':
            sound = minus_19
            break
        case '-20':
            sound = minus_20
            break
        default:
            sound = wrist
    }
    return sound
}
