import { extendTheme } from "@chakra-ui/react";

let colors = {
    brand: {
        primary: 'rgba(8, 167, 48, 1)',
        black: 'rgba(45, 52, 54, 1)',
        yoda: '#B2BEC3',
        required: '#FF9500',
        error: '#FF0022',
        white: '#fff',
        bg: '#EBFAEE',
        system_orange : 'rgba(255, 149, 0, 1)',
        danger: 'rgba(255, 0, 34, 1)',
        text: '#636E72',
        primary_faded: '#EBFAFA',
        bgColor: '#F0F3F5'
    },
    socials: {
        primary: 'rgba(45, 52, 54, 1)',
    },
    chart: {
        orange: 'rgba(255, 149, 0, 1)',
        purple: 'rgba(175, 82, 222, 1)',
        yearly: 'rgba(8, 167, 48, 1)',
        quarterly: 'rgba(90, 200, 250, 1)',
        monthly: 'rgba(0, 122, 255, 1)',
        money_in: '#08A730',
        money_out: '#FF3B30',
        overhead: '#007AFF'
    }
   
}


let fonts = {
    body: 'Manrope'
}

const theme = extendTheme({ colors })

export default theme