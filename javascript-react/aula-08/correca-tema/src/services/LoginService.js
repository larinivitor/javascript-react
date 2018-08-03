import CONFIG from '../config'
import axios from 'axios'

const LOGGED_USER = 'LOGGED_USER'

export default class LoginService {

    static setLoggedUser(token) {
        localStorage.setItem(LOGGED_USER, token)
    }

    static login(email, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/login`, {
            email,
            password
        }).then((result) => {
            this.setLoggedUser(result.data.accessToken)
            return result
        })
    }

    static getLoggedUser() {
        return localStorage.getItem(LOGGED_USER)
    }

    static logout(email, password) {
        return axios.post(`${CONFIG.API_URL_BASE}/logout`, {
        }, {
                headers: {
                    authorization: this.getLoggedUser(),
                    'Content-Type': 'application/json',
                }
            }
        ).then((result) => {
            localStorage.removeItem(LOGGED_USER)
            return result
        })
    }

}

