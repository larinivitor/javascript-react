import LoginService from './login-service'
import PostModel from '../models/post'
import ApiService from './api-service'
import PostError from '../errors/post-error'

class PostService {
    static getMyPosts() {
        const loggedUser = LoginService.getLoggedUser()

        return ApiService.myPosts(loggedUser.accessToken)
            .then(res => {
                return res.data.posts.map(post => {
                    return new PostModel(post.id, post.title, post.text)
                })
            })
            .catch(err => {
                throw new PostError(err.response.data.error)
            })
    }

    static createPost(title, text) {
        const loggedUser = LoginService.getLoggedUser()

        return ApiService.createPost(loggedUser.accessToken, title, text)
            .then(res => {
                return new PostModel(res.data.id, res.data.title, res.data.text)
            })
            .catch(err => {
                throw new PostError(err.response.data.error)
            })
    }
}

export default PostService
