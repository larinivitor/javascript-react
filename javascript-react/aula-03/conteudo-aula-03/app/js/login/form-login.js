import $ from 'jquery'
import jqueryValidation from 'jquery-validation'
import LoginService from '../services/login-service'

class FormLogin {
    configure() {
        const $frmLogin = $('#frmLogin')

        $frmLogin.validate({
            rules: {
                txtEmail: {
                    required: true,
                    email: true
                },
                txtPassword: {
                    required: true
                }
            },
            submitHandler: formSubmitted => {
                this._authenticate()
            }
        })
    }

    _authenticate() {
        const onSuccess = loggedUser => {
            alert(loggedUser.email)
        }

        const onError = error => {
            alert(error.message)
        }

        LoginService.authenticate(
            txtEmail.value,
            txtPassword.value,
            onSuccess,
            onError
        )
    }
}

export default FormLogin
