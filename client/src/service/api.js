import axios from "axios"

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (data) => {
    try {
        await axios.post(`${url}/signup`,data)
    } catch (error) {
        console.log("error while calling signup",error)
        return error.res
    }
}