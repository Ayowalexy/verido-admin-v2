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
        danger: 'rgba(255, 0, 34, 1)'
    },
    socials: {
        primary: 'rgba(45, 52, 54, 1)',
    }
}


let fonts = {
    body: 'Manrope'
}

const theme = extendTheme({ colors })

export default theme