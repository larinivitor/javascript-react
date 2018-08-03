import LoginService from './login-service'

class NavigationService {
    static validateLoggedUserRoute() {
        if (!LoginService.getLoggedUser()) {
            NavigationService.goToLogin()
        }
    }

    static goToHome() {
        NavigationService.validateLoggedUserRoute()
        window.location.href = 'home.html'
    }

    static goToLogin() {
        window.location.href = 'login.html'
    }

    static goToRegister() {
        window.location.href = 'register.html'
    }

    static goToCreatePost() {
        NavigationService.validateLoggedUserRoute()
        window.location.href = 'create-post.html'
    }

}

export default NavigationService