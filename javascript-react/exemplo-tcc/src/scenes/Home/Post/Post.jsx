import React from 'react'

import PostService from '../../../services/PostService'
import ReactMarkdown from 'react-markdown'

import './Post.css'

export default class Post extends React.Component {

    constructor() {
        super()
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        PostService.getPostByNameAndId(this.props.match.params.name, this.props.match.params.id).then((resp) => {
            const post = resp.data
            this.setState(
                post
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="">
                    <h1 className="mt-4">{this.state.title}</h1>
                    <hr />
                    <div className="Post--image">
                        <img className="Post--image__image" src={this.state.image} alt="" />
                    </div>
                    <hr />
                    <div className="Post--text">
                        <ReactMarkdown source={this.state.text} />,
                        <hr />
                    </div>
                </div>
            </div>

        )
    }

}