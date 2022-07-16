const baseUrl = 'http://localhost:5000'
const liveUrl = 'https://verido-v6.herokuapp.com'

const url = liveUrl

const urls = {
    AUTH: {
        register: `${url}/user/register`,
        login: `${url}/user/login`,
        reset: `${url}/user/reset`,
        socials: `${url}/user/socials`
    }
}

export default urls