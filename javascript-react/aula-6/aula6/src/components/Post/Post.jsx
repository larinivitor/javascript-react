import React from 'react'

import './Post.css'

import Button from '../generic/Button/Button'

export default class Post extends React.Component {

    render() {
        return <div className="post">
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.text}</p>
            <div className="alert alert-primary" role="alert">
                {this.props.post.category}
            </div>
            <Button text="Remover" classButton="danger" onClick={() => this.props.onRemove(this.props.post.title)} />
        </div>
    }
}