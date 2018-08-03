import React from 'react'

import './NoticiaItemCategoria.css'

export default class NoticiaItemCategoria extends React.Component {

    render() {
        return <div className="NoticiaItemCategoria">
            {this.props.tag}
        </div>
    }

}