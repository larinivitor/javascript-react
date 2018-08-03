import React from 'react'

import './NoticiaItemTitulo.css'

export default class NoticiaItemTitulo extends React.Component {

    render() {
        return <div className="NoticiaItemTitulo">
            {this.props.titulo}
        </div>
    }

}