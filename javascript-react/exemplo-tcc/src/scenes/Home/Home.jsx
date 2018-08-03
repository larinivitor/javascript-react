import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap'

import Posts from './Posts/Posts'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'

import LoginService from '../../services/LoginService'

import './Home.css'

export default class Home extends React.Component {


    constructor() {
        super()
        this.state = {}
        this.onClickLogoutLink = this.onClickLogoutLink.bind(this)
    }

    onClickLogoutLink() {
        LoginService.logout().then(()=>{
            this.setState({
                redirectLoginPage: true
            })
        })
    }

    render() {
        if(this.state.redirectLoginPage){
            return <Redirect to="/login"/>
        }

        return <div className="Home">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Bloggers</NavbarBrand>
                <NavbarToggler />
                <Nav className="ml-auto" navbar>
                    <NavItem className="Home--navnar__link" onClick={this.onClickLogoutLink}>
                        Logout
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/post/:name/:id" exact component={Post} />
                <Route path="/post-form/:id?" component={PostForm} />
                <Route path="/:name?" exact component={Posts} />
            </Switch>
        </div>
    }

}