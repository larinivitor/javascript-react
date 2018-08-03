import CONFIG from '../config'
import axios from 'axios'

export default class LoginService {

    static categories() {
        return axios.get(`${CONFIG.API_URL_BASE}/categories`)
    }

}

