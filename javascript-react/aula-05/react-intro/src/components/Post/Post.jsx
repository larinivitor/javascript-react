import React from 'react'

import './Post.css'

import H1 from '../H1/H1'

export default class Post extends React.Component {

    render() {
        return <div className="post">
            <H1 h1={this.props.title}/>
            <p>{this.props.text}</p>
        </div>
    }
}