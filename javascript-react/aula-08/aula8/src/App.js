import React, { Component } from 'react';
import BoxShadow from './components/generic/BoxShadow/BoxShadow'
import Button from './components/generic/Button/Button'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Home from './scenes/Home/Home'
import Dashboard from './scenes/Dashboard/Dashboard'
import NotFound from './scenes/NotFound/NotFound'

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="App--link" to='/home'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link  className="App--link" to='/dashboard'>Dashboard</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard/:id?" component={Dashboard} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
