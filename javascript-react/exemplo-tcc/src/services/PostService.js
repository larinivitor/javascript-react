import CONFIG from '../config'
import axios from 'axios'

import LoginService from './LoginService'

export default class PostService {
    static delete(id) {
        return axios.delete(`${CONFIG.API_URL_BASE}/post/${id}`, {
            headers: {
                authorization: LoginService.getLoggerUserToken(),
                'Content-Type': 'application/json',
            }
        })
    }

    static posts(name) {
        return axios.get(`${CONFIG.API_URL_BASE}/posts/${name}`, {
            headers: {
                authorization: LoginService.getLoggerUserToken(),
                'Content-Type': 'application/json',
            }
        })
    }

    static getPostByNameAndId(name, id) {
        return axios.get(`${CONFIG.API_URL_BASE}/post/${name}/${id}`, {
            headers: {
                authorization: LoginService.getLoggerUserToken(),
                'Content-Type': 'application/json',
            }
        })
    }

    static getPostById(id) {
        return axios.get(`${CONFIG.API_URL_BASE}/post/${LoginService.getLoggerUserName()}/${id}`, {
            headers: {
                authorization: LoginService.getLoggerUserToken(),
                'Content-Type': 'application/json',
            }
        })
    }

    static save(post) {
        if (post.id) {
            return axios.put(`${CONFIG.API_URL_BASE}/post/${post.id}`, post, {
                headers: {
                    authorization: LoginService.getLoggerUserToken(),
                    'Content-Type': 'application/json',
                }
            })
        }
        return axios.post(`${CONFIG.API_URL_BASE}/post`, post, {
            headers: {
                authorization: LoginService.getLoggerUserToken(),
                'Content-Type': 'application/json',
            }
        })
    }

}