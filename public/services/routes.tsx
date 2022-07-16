const baseUrl = 'http://localhost:5000'

const urls = {
    AUTH: {
        register: `${baseUrl}/user/register`,
        login: `${baseUrl}/user/login`,
        reset: `${baseUrl}/user/reset`,
        socials: `${baseUrl}/user/socials`
    }
}

export default urls