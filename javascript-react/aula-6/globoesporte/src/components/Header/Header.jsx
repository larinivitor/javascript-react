import React from 'react'

import './Header.css';

export default class Header extends React.Component {

    render() {
        return <header className="Header">
            <div>
                <h1 className="Header-title">{this.props.titulo}</h1>
            </div>
        </header>
    }
}