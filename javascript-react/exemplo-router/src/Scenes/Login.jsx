import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LoginService from '../Services/LoginService'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            redirecionarHome: false
        }
        this._fazerLogin = this._fazerLogin.bind(this)
    }

    // Quando clicamos em fazer login, apenas setamos a informação
    // no localstorage, e mandamos a aplicação redirecionar para home
    _fazerLogin() {
        LoginService.login()
        this.setState({
            redirecionarHome: true
        })
    }
    render() {
        if (this.state.redirecionarHome) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <button onClick={this._fazerLogin}>Login</button>
            </div>
        );
    }
}

export default Login;