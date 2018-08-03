import React from 'react'

import Input from '../generic/Input/Input'
import Button from '../generic/Button/Button'
import Alert from '../generic/Alert/Alert'

import LoginService from '../../services/LoginService'

import './LoginForm.css'

export default class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this)
    }

    getInitialState() {
        return {
            email: '',
            password: '',
        }
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onLoginButtonClick() {
        LoginService.login(this.state.email, this.state.password).then((result) => {
            this.props.onLoginSuccess()
        }).catch(resp => {
            this.setState({
                error: resp.response.data.error
            })
        })
    }

    renderError() {
        return this.state.error ? <Alert classAlert="danger" text={this.state.error} /> : undefined
    }

    render() {
        return (
            <div>
                {this.renderError()}
                <Input placeholder="Digite seu e-mail" name="email" type="text" handleChange={this.handleChange} label="Email" />
                <Input placeholder="Digite sua senha" name="password" type="password" handleChange={this.handleChange} label="Senha" />
                <div className="pull-right">
                    <Button isOutline={true} classButton="primary" type="button" onClick={this.onLoginButtonClick} text="Login" />
                </div>
            </div>
        )
    }

}