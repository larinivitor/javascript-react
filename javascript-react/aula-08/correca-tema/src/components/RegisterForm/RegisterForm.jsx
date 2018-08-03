import React from 'react'

import Input from '../generic/Input/Input'
import Button from '../generic/Button/Button'
import Alert from '../generic/Alert/Alert'

import RegisterService from '../../services/RegisterService'

import './RegisterForm.css'

export default class RegisterForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()

        this.handleChange = this.handleChange.bind(this)
        this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this)
    }

    getInitialState() {
        return {
            email: '',
            password: '',
            name: ''
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

    onRegisterButtonClick() {
        RegisterService.register(this.state.email, this.state.name, this.state.password).then((result) => {
            this.props.onRegisterSuccess()
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
                <Input placeholder="Digite seu nome" name="name" type="text" handleChange={this.handleChange} label="Nome" />
                <Input placeholder="Digite seu email" name="email" type="text" handleChange={this.handleChange} label="E-mail" />
                <Input placeholder="Digite sua senha" name="password" type="password" handleChange={this.handleChange} label="Senha" />
                <div className="pull-right">
                    <Button isOutline={true} classButton="primary" type="button" onClick={this.onRegisterButtonClick} text="Registrar" />
                </div>
            </div>
        )

    }

}