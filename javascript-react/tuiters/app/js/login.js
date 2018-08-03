import $ from 'jquery'
import _ from 'jquery-validation'

import LoginService from './services/login-service'
import NavigationService from './services/navigation-service'
import LoaderService from './services/loader-service'
import AlertService from './services/alert-service'

class LoginPage {
    checkForLoggedUser() {
        if (!!LoginService.getLoggedUser()) {
            NavigationService.goToHome()
        }
    }

    configure() {
        $('#frmLogin').validate({
            rules: {
                txtEmail: {
                    required: true,
                    email: true
                },
                txtPassword: {
                    required: true,
                    minlength: 4
                }
            },
            submitHandler: function (form) {
                this._login()
            }.bind(this)
        })

        $('#btnCreateAccount').click(() => {
            NavigationService.goToRegister()
        })
    }

    _login() {
        const email = txtEmail.value
        const password = txtPassword.value

        LoaderService.show()

        LoginService.login(email, password)
            .then(() => {
                LoaderService.hide()
                NavigationService.goToHome()
            })
            .catch(error => {
                LoaderService.hide()
                AlertService.error('Ooops', error.message)
            })
    }
}

const page = new LoginPage()
page.checkForLoggedUser()
page.configure()

