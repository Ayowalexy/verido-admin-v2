import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"


const getToken = async () => {
    const userDetails = await AsyncStorage.getItem("userDetails")
    const data = JSON.parse(userDetails)
    return data?.token
}

const httpGet = async (url, isAuth) => {
    const token = await getToken();
    try {
        const response = await axios.get(url,
            isAuth
                ? {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
                : {}
        )

        return response?.data?.data
    }
    catch (e) {
        console.log(e)
    }
}


const httpDelete = async (url, isAuth, deleteBody) => {
    const token = await getToken();
    try {
        const response = await axios.delete(url,
            isAuth
                ?
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
                : {}
        )
        return response
    } catch (e) {
        console.log(e)
    }
}


const httpPatch = async (url, isAuth, patchBody) => {
    const token = await getToken();
    try {
        const response = await axios.patch(url, JSON.stringify(patchBody),

            isAuth
                ?
                (
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                )
                : {}

        )

        return response
    } catch (e) {
        console.log(e)
    }
}



const httpPost = async (url, isAuth, postBody) => {
    const token = await getToken();
    try {
        const response = await axios.post(url,JSON.stringify(postBody),

            isAuth
                ?
                (
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                )
                : {}

        )

        return response
    } catch (e) {
        console.log(e)
    }
}
export {
    httpGet,
    httpDelete,
    httpPatch,
    httpPost
}