const LOGADO = 'LOGADO'

export default class LoginService {

    static login() {
        localStorage.setItem(LOGADO, true)
    }

    static isLogado() {
        return localStorage.getItem(LOGADO)
    }

    static logout() {
        localStorage.removeItem(LOGADO)
    }

}

