import axios from "axios";
import urls from "./routes";
import { httpGet, httpDelete, httpPatch } from './calls'


type dataType = {
    data?: any
}


const register = async (data: dataType) => {
    const url = urls.AUTH.register;
    try {
        const response = await axios.post(
            url,
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return response
    } catch (e){
        console.log(e)
        return e
    }
}

const login = async (data: dataType) => {
    const url = urls.AUTH.login;
    try {
        const response = await axios.post(
            url,
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return response
    } catch (e: any){
        console.log(e)
        return e
    }
}


const reset = async (data: any) => {
    const url = urls.AUTH.reset;
    try {
        const response = await axios.post(
            url,
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return response
    } catch (e: any){
        console.log(e)
        return e
    }
}

const socials = async (data: any) => {
    const url = urls.AUTH.socials;
    try {
        const response = await axios.post(
            url,
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return response
    } catch (e: any){
        console.log(e)
        return e
    }
}


const getAllBusiness = async () => {
    const response = await httpGet(urls.BUSINESS.business, true)
    return response
}


const getOneBusiness = async (id: string) => {
    const response = await httpGet(urls.BUSINESS.business.concat(`/${id}`), true)
    return response
}

const deleteOneBusiness = async (id: string) => {
    const response = await httpDelete(urls.BUSINESS.business.concat(`/${id}`), true)
    return response
}

const suspendBusiness = async(id: string) => {
    const response = await httpPatch(urls.BUSINESS.business.concat(`/${id}`), true, {id: id})
    return response
}

const getAllConsultants =async () => {
    const response = await httpGet(urls.CONSULTANT.consultants, true);
    return response
}

const getOneConsultant = async (id: string) => {
    const response = await httpGet(urls.CONSULTANT.consultants.concat(`/${id}`), true);
    return response
}


const suspendConsultant =async (id: string) => {
    const response = await httpPatch(urls.CONSULTANT.consultants.concat(`/${id}`), true, {id: id})
    return response
}


const deleteConsultant =async (id: string) => {
    const response = await httpDelete(urls.CONSULTANT.consultants.concat(`/${id}`), true)
    return response
}

const getAllAnalytics = async () => {
    const response = await httpGet(urls.ANALYTICS.analytics, true);
    return response
}
export {
    register,
    login,
    reset,
    socials,
    getAllBusiness,
    getOneBusiness,
    deleteOneBusiness,
    suspendBusiness,
    getAllConsultants,
    getOneConsultant,
    suspendConsultant,
    deleteConsultant,
    getAllAnalytics
}