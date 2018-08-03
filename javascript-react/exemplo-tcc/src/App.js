import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import axios from 'axios'

import Loading from './components/generic/Loading/Loading'
import Home from './scenes/Home/Home'
import Login from './scenes/Login/Login'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {}
    this.configureRequestInterceptor()
  }

  configureRequestInterceptor() {
    const self = this
    axios.interceptors.request.use((config) => {
      self.showLoader(true)
      return config
    });

    axios.interceptors.response.use((response) => {
      self.showLoader(false)
      return response;
    }, (error) => {
      if (error.response.status === 401) {
        self.setUnauthorized()
      }
      self.showLoader(false)
      return Promise.reject(error)
    })
  }

  setUnauthorized(){
    this.setState({
      unAuthorized: true
    })
  }

  showLoader(showLoader) {
    this.setState({
      showLoader
    })
  }

  render() {
    if(this.state.unAuthorized){
      return <Redirect to="/login" />
    }

    return (
      <div className="App">
        <Loading showLoader={this.state.showLoader} />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/"  component={Home} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
