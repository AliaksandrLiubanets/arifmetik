import f_0 from '../assets/flash-cards/0_r_0.png'
import f_1 from '../assets/flash-cards/1_r_1.png'
import f_2 from '../assets/flash-cards/2_r_2.png'
import f_3 from '../assets/flash-cards/3_r_3.png'
import f_2_1 from '../assets/flash-cards/3_r_2_1.png'
import f_1_2 from '../assets/flash-cards/3_r_1_2.png'
import f_4 from '../assets/flash-cards/4_r_4.png'
import f_1_3 from '../assets/flash-cards/4_r_1_3.png'
import f_3_1 from '../assets/flash-cards/4_r_3_1.png'
import f_2_2 from '../assets/flash-cards/4_r_2_2.png'
import f_2_3 from '../assets/flash-cards/5_r_2_3.png'
import f_3_2 from '../assets/flash-cards/5_r_3_2.png'
import f_4_1 from '../assets/flash-cards/5_r_4_1.png'
import f_1_4 from '../assets/flash-cards/5_r_1_4.png'
import f_3_3 from '../assets/flash-cards/6_r_3_3.png'
import f_4_2 from '../assets/flash-cards/6_r_4_2.png'
import f_2_4 from '../assets/flash-cards/6_r_2_4.png'
import f_2_2_2 from '../assets/flash-cards/6_r_2_2_2.png'
import f_2_2_3 from '../assets/flash-cards/7_r_2_2_3.png'
import f_2_3_2 from '../assets/flash-cards/7_r_2_3_2.png'
import f_3_2_2 from '../assets/flash-cards/7_r_3_2_2.png'
import f_3_4 from '../assets/flash-cards/7_r_3_4.png'
import f_4_3 from '../assets/flash-cards/7_r_4_3.png'
import f_4_4 from '../assets/flash-cards/8_r_4_4.png'
import f_2_3_3 from '../assets/flash-cards/8_r_2_3_3.png'
import f_3_2_3 from '../assets/flash-cards/8_r_3_2_3.png'
import f_3_3_2 from '../assets/flash-cards/8_r_3_3_2.png'
import f_4_2_2 from '../assets/flash-cards/8_r_4_2_2.png'
import f_2_2_4 from '../assets/flash-cards/8_r_2_2_4.png'
import f_2_4_2 from '../assets/flash-cards/8_r_2_4_2.png'
import f_4_2_3 from '../assets/flash-cards/9_r_4_2_3.png'
import f_4_3_2 from '../assets/flash-cards/9_r_4_3_2.png'
import f_3_2_4 from '../assets/flash-cards/9_r_3_2_4.png'
import f_3_4_2 from '../assets/flash-cards/9_r_3_4_2.png'
import f_3_3_3 from '../assets/flash-cards/9_r_3_3_3.png'
import f_2_3_4 from '../assets/flash-cards/9_r_2_3_4.png'
import f_2_4_3 from '../assets/flash-cards/9_r_2_4_3.png'
import f_4_4_2 from '../assets/flash-cards/10_r_4_4_2.png'
import f_2_4_4 from '../assets/flash-cards/10_r_2_4_4.png'
import f_4_2_4 from '../assets/flash-cards/10_r_4_2_4.png'
import f_3_4_3 from '../assets/flash-cards/10_r_3_4_3.png'
import f_4_3_3 from '../assets/flash-cards/10_r_4_3_3.png'
import f_3_3_4 from '../assets/flash-cards/10_r_3_3_4.png'
import f_3_3_2_2 from '../assets/flash-cards/10_r_3_3_2_2.png'
import f_3_2_3_2 from '../assets/flash-cards/10_r_3_2_3_2.png'
import f_3_2_2_3 from '../assets/flash-cards/10_r_3_2_2_3.png'
import f_2_3_3_2 from '../assets/flash-cards/10_r_2_3_3_2.png'
import f_2_3_2_3 from '../assets/flash-cards/10_r_2_3_2_3.png'

export const getPictureAccordingStrNumber = (num: string) => {
    let picture: string
    switch (num) {
        case '0':
            picture = f_0
            break
        case '1':
            picture = f_1
            break
        case '2':
            picture = f_2
            break

        case '3':
            picture = f_3
            break
        case '2_1':
            picture = f_2_1
            break
        case '1_2':
            picture = f_1_2
            break

        case '4':
            picture = f_4
            break
        case '1_3':
            picture = f_1_3
            break
        case '3_1':
            picture = f_3_1
            break
        case '2_2':
            picture = f_2_2
            break

        case '2_3':
            picture = f_2_3
            break
        case '3_2':
            picture = f_3_2
            break
        case '4_1':
            picture = f_4_1
            break
        case '1_4':
            picture = f_1_4
            break

        case '3_3':
            picture = f_3_3
            break
        case '4_2':
            picture = f_4_2
            break
        case '2_4':
            picture = f_2_4
            break
        case '2_2_2':
            picture = f_2_2_2
            break

        case '2_2_3':
            picture = f_2_2_3
            break
        case '2_3_2':
            picture = f_2_3_2
            break
        case '3_2_2':
            picture = f_3_2_2
            break
        case '3_4':
            picture = f_3_4
            break
        case '4_3':
            picture = f_4_3
            break


        case '4_4':
            picture = f_4_4
            break
        case '2_3_3':
            picture = f_2_3_3
            break
        case '3_2_3':
            picture = f_3_2_3
            break
        case '3_3_2':
            picture = f_3_3_2
            break
        case '4_2_2':
            picture = f_4_2_2
            break
        case '2_2_4':
            picture = f_2_2_4
            break
        case '2_4_2':
            picture = f_2_4_2
            break

        case '4_2_3':
            picture = f_4_2_3
            break
        case '4_3_2':
            picture = f_4_3_2
            break
        case '3_2_4':
            picture = f_3_2_4
            break
        case '3_4_2':
            picture = f_3_4_2
            break
        case '3_3_3':
            picture = f_3_3_3
            break
        case '2_3_4':
            picture = f_2_3_4
            break
        case '2_4_3':
            picture = f_2_4_3
            break

        case '4_4_2':
            picture = f_4_4_2
            break
        case '2_4_4':
            picture = f_2_4_4
            break
        case '4_2_4':
            picture = f_4_2_4
            break
        case '3_4_3':
            picture = f_3_4_3
            break
        case '4_3_3':
            picture = f_4_3_3
            break
        case '3_3_4':
            picture = f_3_3_4
            break
        case '3_3_2_2':
            picture = f_3_3_2_2
            break
        case '3_2_3_2':
            picture = f_3_2_3_2
            break
        case '3_2_2_3':
            picture = f_3_2_2_3
            break
        case '2_3_3_2':
            picture = f_2_3_3_2
            break
        case '2_3_2_3':
            picture = f_2_3_2_3
            break
        default:
            picture = f_0
    }
    return picture
}