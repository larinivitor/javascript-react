import CONFIG from '../config'
import axios from 'axios'

const USER_TOKEN = 'USER_TOKEN'
const USER_NAME = 'USER_NAME'

export default class LoginService {

    static setLoggerUserInfo(user) {
        localStorage.setItem(USER_TOKEN, user.accessToken)
        localStorage.setItem(USER_NAME, user.name)
    }

    static login(email, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/blogger`, {
            email,
            password
        }).then((result) => {
            this.setLoggerUserInfo(result.data)
            return result
        })
    }

    static getLoggerUserName() {
        return localStorage.getItem(USER_NAME)
    }

    static getLoggerUserToken() {
        return localStorage.getItem(USER_TOKEN)
    }

    static logout() {
        return axios.post(`${CONFIG.API_URL_BASE}/bloggerLogout`, {
        }, {
                headers: {
                    authorization: this.getLoggerUserToken(),
                    'Content-Type': 'application/json',
                }
            }
        ).then((result) => {
            localStorage.removeItem(USER_TOKEN)
            localStorage.removeItem(USER_NAME)
            return result
        })
    }


}

