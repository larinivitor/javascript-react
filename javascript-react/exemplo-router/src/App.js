import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Scenes/Login'
import Home from './Scenes/Home'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* Aqui declarei duas rotas, login e a home. Deixei o login por primeiro, pois sempre vai verificar primeiramente
        a rota de login. Abaixo temos a nossa rota com a Home, que ira conter as rotas privadas
        e A VERIFICAÇÃO SE O USUÁRIO ESTÁ LOGADO*/}
        <Switch>
          <Route path="/login" exact component={Login} />
          {/* se não for a rota de login, como aqui em baixo, no "/" NÃO TEMOS EXACT, vai sempre cair ali, e ai sim
        , verificarmos se o cara ta logado, para direcionarmos para a pagina de login ou não o/ */}
          <Route path="/" component={Home} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
