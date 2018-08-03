import ApiService from './api-service'
import LoggedUser from '../models/logged-user'
import LoginError from '../errors/login-error'

class LoginService {
    static getLoggedUser() {
        const saved = localStorage.getItem('logged_user')

        if (!!saved) {
            const parsed = JSON.parse(saved)
            return new LoggedUser(parsed.email, parsed.name, parsed.accessToken)
        }

        return null
    }

    static login(email, password) {
        return ApiService.login(email, password)
            .then(res => {
                const loggedUser = new LoggedUser(
                    res.data.email,
                    res.data.name,
                    res.data.accessToken
                )

                LoginService._setLoggedUser(loggedUser)

                return loggedUser
            })
            .catch(err => {
                throw new LoginError(err.response.data.error)
            })
    }

    static logout() {
        const logged = LoginService.getLoggedUser()

        return ApiService.logout(logged.accessToken)
            .then(res => {
                localStorage.removeItem('logged_user')
                return true
            })
            .catch(err => {
                throw new LoginError(err.response.data.error)
            })
    }

    static _setLoggedUser(loggedUser) {
        localStorage.setItem('logged_user', JSON.stringify(loggedUser))
    }
}

export default LoginService
