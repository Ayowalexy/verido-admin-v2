import axios from "axios";
import urls from "./routes";

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



export {
    register,
    login,
    reset,
    socials
}