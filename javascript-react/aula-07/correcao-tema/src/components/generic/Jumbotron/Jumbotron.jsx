import React from 'react'

export default class Jumbotron extends React.Component {
    render() {
        return <div className="jumbotron">
            <h1 className="display-4">{this.props.titulo}</h1>
            <p className="lead">{this.props.subtitulo}</p>
        </div>
    }
}

