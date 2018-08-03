import RegisterError from '../errors/register-error'
import ApiService from './api-service'
import NewAccountModel from '../models/new-account'

class RegisterService {
    static register(email, name, password) {
        return ApiService.createAccount(email, name, password)
            .then(res => {
                return new NewAccountModel(
                    res.data.id,
                    res.data.email,
                    res.data.name
                )
            })
            .catch(err => {
                throw new RegisterError(err.response.data.error)
            })
    }
}

export default RegisterService
