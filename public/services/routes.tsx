const baseUrl = 'http://localhost:8080'
// const liveUrl = 'https://verido-v4.herokuapp.com'
const liveUrl = 'https://verido-admin-server.herokuapp.com'

const url = baseUrl;

const urls = {
    AUTH: {
        register: `${url}/admin/register`,
        login: `${url}/admin/login`,
        reset: `${url}/admin/reset`,
        socials: `${url}/admin/socials`
    },
    BUSINESS: {
        business: `${url}/business`,
    },
    CONSULTANT: {
        consultants: `${url}/consultant`,
        add_consultant: `${url}/add-consultant`
    },
    ANALYTICS: {
        analytics: `${url}/analytics`
    },
    SUBSCRIPTION: {
        subscription: `${url}/subscription`
    }
}

export default urls