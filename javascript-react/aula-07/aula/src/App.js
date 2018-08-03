import React, { Component } from 'react';

import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'

import Button from './components/generic/Button/Button'

import './App.css'

const SELECTED_COMPONENTS = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER'
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedComponent: SELECTED_COMPONENTS.LOGIN
    }

    this.onClickButtonLogin = this.onClickButtonLogin.bind(this)
    this.onClickButtonRegister = this.onClickButtonRegister.bind(this)
  }

  renderContent() {
    if (this.state.selectedComponent === SELECTED_COMPONENTS.LOGIN) {
      return <LoginForm />
    } else if (this.state.selectedComponent === SELECTED_COMPONENTS.REGISTER) {
      return <RegisterForm />
    }
    return ''
  }

  onClickButtonLogin() {
    this.setSelectedComponent(SELECTED_COMPONENTS.LOGIN)
  }

  onClickButtonRegister() {
    this.setSelectedComponent(SELECTED_COMPONENTS.REGISTER)
  }

  setSelectedComponent(selectedComponent) {
    this.setState({
      selectedComponent
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App--navbar">
          <Button onClick={this.onClickButtonLogin} text="Login" />
          <Button onClick={this.onClickButtonRegister} text="Registrar" />
        </div>
        <div className="App--content">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default App;
