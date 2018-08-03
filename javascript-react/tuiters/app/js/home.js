import $ from 'jquery'

import PostService from './services/post-service'
import NavigationService from './services/navigation-service'
import LoaderService from './services/loader-service'
import LoginService from './services/login-service'

NavigationService.validateLoggedUserRoute()

class HomePage {
    configure() {
        $('#btnCreatePost').click(() => {
            NavigationService.goToCreatePost()
        })
    }

    loadPosts() {
        LoaderService.show()

        const $postList = $('#post-list')
        $postList.empty()

        PostService.getMyPosts()
            .then(posts => {
                posts.forEach(post => {
                    $postList.append(
                        this._createPostWithTemplate(post)
                    )
                })
                LoaderService.hide()
            })
            .catch(err => {
                LoaderService.hide()
                console.error(err)
            })

        $('#btnLogout').click(() => {
            this._logout()
        })
    }

    _createPostWithTemplate(post) {
        return `<div class="card">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.text}</p>
                    </div>
                </div>`
    }

    _logout() {
        LoaderService.show()

        LoginService.logout()
            .then(() => {
                NavigationService.goToLogin()
            })
            .catch(err => {

            })
    }
}

const homePage = new HomePage()

homePage.configure()
homePage.loadPosts()