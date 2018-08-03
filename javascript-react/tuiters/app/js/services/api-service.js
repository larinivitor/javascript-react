import CONFIG from '../config'
import axios from 'axios'

class ApiService {
    static createAccount(email, name, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/createAccount`, {
            email,
            name,
            password
        })
    }

    static login(email, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/login`, {
            email, password
        })
    }

    static myPosts(accessToken) {
        return axios.get(`${CONFIG.API_URL_BASE}/myPosts`, {
            headers: {
                authorization: accessToken
            }
        })
    }

    static createPost(accessToken, title, text) {
        return axios.post(
            `${CONFIG.API_URL_BASE}/createPost`,
            { title, text },
            {
                headers: {
                    authorization: accessToken
                }
            }
        )
    }

    static logout(accessToken) {
        return axios.post(
            `${CONFIG.API_URL_BASE}/logout`,
            {},
            {
                authorization: accessToken
            }
        )
    }
}

export default ApiService
