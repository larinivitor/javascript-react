import React from 'react'

import Movies from './Movies/Movies'
import MovieForm from './MovieForm/MovieForm'
import NavBar from './NavBar/NavBar'

import './Dashboard.css'


const SELECTED_CONTENTS = {
    REGISTER_MOVIE: 'REGISTER_MOVIE',
    LIST_MOVIES: 'LIST_MOVIES'
}

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedContent: SELECTED_CONTENTS.LIST_MOVIES
        }
        this.onClickButtonList = this.onClickButtonList.bind(this)
        this.onClickButtonRegister = this.onClickButtonRegister.bind(this)
    }

    onClickButtonList() {
        this.setSelectedContent(SELECTED_CONTENTS.LIST_MOVIES)
    }

    onClickButtonRegister() {
        this.setSelectedContent(SELECTED_CONTENTS.REGISTER_MOVIE)
    }

    setSelectedContent(content) {
        this.setState({
            selectedContent: content
        })
    }

    renderContent() {
        if (this.state.selectedContent === SELECTED_CONTENTS.REGISTER_MOVIE) {
            return <MovieForm />
        }
        if (this.state.selectedContent === SELECTED_CONTENTS.LIST_MOVIES) {
            return <Movies />
        }
        return
    }

    render() {
        return <div>
            <div className="Dashboard--header">
                <NavBar
                    onClickButtonList={this.onClickButtonList}
                    onClickButtonRegister={this.onClickButtonRegister}
                    onLogout={this.props.onLogout}
                />
            </div>

            <div className="Dashboard--content">
                {this.renderContent()}
            </div>
        </div>
    }

}