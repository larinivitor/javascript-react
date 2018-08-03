import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import LoginService from '../Services/LoginService'
import Usuarios from './Usuarios'
import Cidades from './Cidades'
import Dashboard from './Dashboard'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            redirecionarLogin: false
        }
        this._logout = this._logout.bind(this)
    }
    // Deixei aqui esta verificação, para antes mesmo de montar o componete, verificar se o usuário está logado
    componentWillMount() {
        if (!LoginService.isLogado()) {
            // caso não esteja logado, seto no state para redirecionar para o login
            this._redirecionarLogin()
        }
    }

    _logout() {
        LoginService.logout()
        this._redirecionarLogin()
    }

    _redirecionarLogin() {
        this.setState({
            redirecionarLogin: true
        })
    }

    render() {
        // primeira coisa que fazemos é ver se é necessário redirecionar para o login, caso sim, redirecionamos
        if (this.state.redirecionarLogin) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                {/* Aqui é um exemplo de NavBar, ele sempre vai aparecer para os usuários logados */}
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/usuarios">Usuários</Link></li>
                        <li><Link to="/cidades">Cidades</Link></li>
                        <a onClick={this._logout}><li>Logout</li></a>
                    </ul>
                </nav>
                {/* Aqui vai mudando o conteudo de acordo com a rota. */}
                <Switch>
                    <Route path="/usuarios" exact component={Usuarios} />
                    <Route path="/cidades" exact component={Cidades} />
                     {/* Vejam aqui que tem uma barra, aqui é a nossa rota padrão, se não cair em usuários 
                        ou cidades, cai na com abarra
                    */}
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default Home;    