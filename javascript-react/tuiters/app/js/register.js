import $ from 'jquery'
import _ from 'jquery-validation'

import RegisterService from './services/register-service'
import RegisterError from './errors/register-error'

import LoginService from './services/login-service'
import NavigationService from './services/navigation-service'

import LoaderService from './services/loader-service'
import AlertService from './services/alert-service'

class RegisterForm {
    configure() {
        const submitHandler = form => {
            this._createAccount()
        }

        $('#frmRegister').validate({
            rules: {
                txtEmail: {
                    required: true,
                    email: true
                },
                txtName: {
                    required: true
                },
                txtPassword: {
                    required: true
                },
                txtConfirmPassword: {
                    equalTo: '#txtPassword'
                }
            },
            submitHandler: submitHandler.bind(this)
        })

        $('#btnGoToLogin').click(() => {
            NavigationService.goToLogin()
        })
    }

    _createAccount() {
        const email = txtEmail.value
        const name = txtName.value
        const password = txtPassword.value

        LoaderService.show()

        RegisterService.register(email, name, password)
            .then(result => {
                return LoginService.login(email, password)
            })
            .then(result => {
                NavigationService.goToHome()
            })
            .catch(error => {
                LoaderService.hide()
                AlertService.error('Ooops', error.message)
            })
    }
}

const registerForm = new RegisterForm()
registerForm.configure()
