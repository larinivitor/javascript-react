import React from 'react'

import './NoticiaItemImagem.css'

export default class NoticiaItemImagem extends React.Component {

    render() {
        return <div className="NoticiaItemImagem">
            <img className="NoticiaItemImagem--img" src={this.props.imagem} />
        </div>
    }

}