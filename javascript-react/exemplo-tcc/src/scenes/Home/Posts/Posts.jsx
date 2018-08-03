import React from 'react'
import { Redirect } from 'react-router-dom'
import PostCard from './PostCard/PostCard'

import ButtonNewPost from './ButtonNewPost/ButtonNewPost'

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import PostService from '../../../services/PostService'
import LoginService from '../../../services/LoginService'
import './Posts.css'

export default class Posts extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            postToDelete: {},
            showAdminButtons: true
        }
        this.onClickDeletePost = this.onClickDeletePost.bind(this)
        this.onClickButtonCloseModal = this.onClickButtonCloseModal.bind(this)
        this.onClickButtonDeletePost = this.onClickButtonDeletePost.bind(this)
        this.onClickButtonNewPost = this.onClickButtonNewPost.bind(this)
    }

    componentDidMount() {
        let author
        if (this.props.match.params.name &&
            this.props.match.params.name !== LoginService.getLoggerUserName()) {
            this.setState({
                showAdminButtons: false
            })
            author = this.props.match.params.name
        } else {
            author = LoginService.getLoggerUserName()

        }
        this.setPostAuthor(author)
        this.findPosts(author)
    }

    setPostAuthor(author) {
        this.setState({
            author
        })
    }

    findPosts(author) {
        PostService.posts(author).then((resp) => {
            this.setState({
                posts: resp.data.posts
            })
        })
    }

    renderPosts() {
        return this.state.posts.map((post, index) => {
            return <PostCard onClickDeletePost={() => this.onClickDeletePost(post)}
                key={index}
                author={this.state.author}
                post={post} 
                showAdminButtons={this.state.showAdminButtons}
                />
        })
    }

    onClickDeletePost(postToDelete) {
        this.setState({
            postToDelete
        })
    }

    onClickButtonCloseModal() {
        this.clearPostToDelete()
    }

    clearPostToDelete() {
        this.setState({
            postToDelete: {}
        })
    }

    onClickButtonDeletePost() {
        PostService.delete(this.state.postToDelete.id).then(() => {
            this.clearPostToDelete()
            this.findPosts(this.state.author)
        })
    }

    renderButtonNewPost() {
        return this.state.showAdminButtons ?<ButtonNewPost onClickButtonNewPost={this.onClickButtonNewPost}/> : undefined
    }

    onClickButtonNewPost(){
        this.setState({
            goToNewPost: true
        })
    }

    render() {
        if(this.state.goToNewPost){
            return <Redirect to="post-form" />
        }
        return <div>
            {this.renderButtonNewPost()}
            <Modal isOpen={this.state.postToDelete.title? true: false}>
                <ModalHeader toggle={this.toggle}>Confirmação</ModalHeader>
                <ModalBody>
                    Deseja excluir o post {this.state.postToDelete.title} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.onClickButtonCloseModal}>Cancelar</Button>
                    <Button color="danger" onClick={this.onClickButtonDeletePost}>Excluir</Button>
                </ModalFooter>
            </Modal>
            <div className="Posts--content">
                {this.renderPosts()}
            </div>
        </div >
    }

}