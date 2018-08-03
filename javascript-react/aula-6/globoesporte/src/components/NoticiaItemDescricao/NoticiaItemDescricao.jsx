import React from 'react'

import './NoticiaItemDescricao.css'

export default class NoticiaItemDescricao extends React.Component {
    render() {
        return <div className="NoticiaItemDescricao">
            {this.props.descricao}
        </div>
    }
}