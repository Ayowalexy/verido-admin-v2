const baseUrl = 'http://localhost:8080'
// const liveUrl = 'https://verido-v4.herokuapp.com'
const liveUrl = 'https://verido-admin-server.herokuapp.com'

const url = liveUrl;

const urls = {
    AUTH: {
        register: `${url}/admin/register`,
        login: `${url}/admin/login`,
        reset: `${url}/admin/reset`,
        socials: `${url}/admin/socials`
    },
    BUSINESS: {
        business: `${url}/business`,
        create_business: `${url}/create-business`
    },
    CONSULTANT: {
        consultants: `${url}/consultant`,
        add_consultant: `${url}/add-consultant`,
        create_consultant: `${url}/create-consultant`,
        get_business: `${url}/consultant-business`

    },
    ANALYTICS: {
        analytics: `${url}/analytics`,
        partner_analytics: `${url}/partner-analytics`,
        consultant_analytics: `${url}/consultant-analytics`
    },
    SUBSCRIPTION: {
        subscription: `${url}/subscription`
    },
    PARTNERS: {
        all_partners: `${url}/partners`,
        get_business: `${url}/partner-business`,
        get_consultant: `${url}/partner-consultant`
    },
    ADMIN: {
        get_one_user: `${url}/admin`,
        all_user: `${url}/all-user`
    }
}

export default urls