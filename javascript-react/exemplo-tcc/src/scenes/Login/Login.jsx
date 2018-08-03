import React from 'react'

import { Redirect } from 'react-router-dom'

import { FormGroup, Label, Input, Button } from 'reactstrap';

import BoxShadow from '../../components/generic/BoxShadow/BoxShadow'

import LoginService from '../../services/LoginService'

import './Login.css'

export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onLoginButtonClick() {
        LoginService.login(this.state.email, this.state.password).then((result) => {
            this.setState({
                logged: true
            })
        })
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        if (this.state.logged) {
            return <Redirect to='/' />
        }
        return <div className="Login">
            <BoxShadow>
                <div className="Login--content">
                <FormGroup>
                    <Label >E-mail</Label>
                    <Input type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Digite seu E-mail"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Senha</Label>
                    <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Digite sua senha"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button className="pull-right" onClick={this.onLoginButtonClick} color="primary">Login</Button>
                </FormGroup>
                </div>
            </BoxShadow>
            )
        </div>
    }

}