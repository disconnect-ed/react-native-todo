import morning from '../../assets/img/1.png'
import two from '../../assets/img/2.png'
import evening from '../../assets/img/3.png'
import night from '../../assets/img/4.png'


export const getTheme = () => {
    const hours = new Date().getHours()
    if (hours > 4 && hours < 9) {
        const theme = {
            img: 1,
            color: '138, 148, 127',
            textColor: 'rgb(138, 148, 127)',
            active: 'morning'
        }
        return theme
    }
    if (hours >= 9 && hours <= 16) {
        const theme = {
            img: 2,
            color: '106, 186, 177',
            textColor: 'rgb(106, 186, 177)',
            active: 'day'
        }
        return theme
    }
    if (hours > 16 && hours <= 22) {
        const theme = {
            img: 3,
            color: '176, 103, 98',
            textColor: 'rgb(176, 103, 98)',
            active: 'evening'
        }
        return theme
    }
    if (hours > 22 || hours <= 4) {
        const theme = {
            img: 4,
            color: '56, 64, 95',
            textColor: 'rgb(56, 64, 95)',
            active: 'night'
        }
        return theme
    }
}