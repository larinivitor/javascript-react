import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    CardImg, CardSubtitle, CardBody
} from 'reactstrap';

import './PostCard.css'

export default class PostCard extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    renderEditButtons() {
        return this.props.showAdminButtons ? <div className="PostCard--icons">
            <span className="PostCard--icons__link"><FontAwesomeIcon className="PostCard--icons__icon" onClick={this.props.onClickDeletePost} icon="times" /></span>
            <Link className="PostCard--icons__link" to={`/post-form/${this.props.post.id}`}><FontAwesomeIcon className="PostCard--icons__icon" icon="user-edit" /></Link>
        </div> : undefined

    }

    render() {
        return (
            <div className="PostCard">
                <CardImg className="PostCard--image" src={this.props.post.image} />
                <CardBody>
                    <CardSubtitle className="PostCard--title">{this.props.post.title}</CardSubtitle>
                    <div className="PostCard--description">
                        <p>{this.props.post.description}</p>
                    </div>
                    <div className="PostCard--link__details">
                        <Link to={`/post/${this.props.author}/${this.props.post.id}`}>Leia mais</Link>
                    </div >
                    {this.renderEditButtons()}
                </CardBody>
            </div >
        )
    }

}