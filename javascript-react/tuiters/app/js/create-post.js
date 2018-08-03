import $ from 'jquery'
import _ from 'jquery-validation'

import LoginService from './services/login-service'
import NavigationService from './services/navigation-service'
import PostService from './services/post-service'
import LoaderService from './services/loader-service'
import AlertService from './services/alert-service'

NavigationService.validateLoggedUserRoute()

class CreatePostPage {
    configure() {

        $('#frmNewPost').validate({
            rules: {
                txtTitle: {
                    required: true,
                    minlength: 3
                },
                txtText: {
                    required: true
                }
            },
            submitHandler: function (form) {
                this._createPost()
            }.bind(this)
        })

        $('#btnCancel').click(() => {
            NavigationService.goToHome()
        })
    }

    _createPost() {
        LoaderService.show()

        PostService.createPost(txtTitle.value, txtText.value)
            .then(res => {
                LoaderService.hide()

                txtTitle.value = ''
                txtText.value = ''

                AlertService.success(
                    'Good job!',
                    'Your post are created!',
                    'back to home',
                    () => {
                        NavigationService.goToHome()
                    }
                )
            })
            .catch(err => {
                LoaderService.hide()

                AlertService.error(
                    'Oooops!',
                    err.message
                )
            })
    }
}

const page = new CreatePostPage()
page.configure()