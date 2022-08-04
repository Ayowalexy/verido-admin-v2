const baseUrl = 'http://localhost:5000'
const liveUrl = 'https://verido-v4.herokuapp.com'

const url = liveUrl

const urls = {
    AUTH: {
        register: `${url}/user/register`,
        login: `${url}/user/login`,
        reset: `${url}/user/reset`,
        socials: `${url}/user/socials`
    },
    BUSINESS: {
        business: `${url}/admin/business`,
    },
    CONSULTANT: {
        consultants: `${url}/admin/consultant`
    },
    ANALYTICS: {
        analytics: `${url}/user/analytics`
    }
}

export default urls