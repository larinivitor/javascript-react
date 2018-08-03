import $ from 'jquery'

class LoaderService {
    static show() {
        $('body').append(
            `<div class="loader" id="loader">
                <img src="../img/loader.gif" />
            </div>`
        )
    }

    static hide() {
        $('#loader').remove()
    }
}

export default LoaderService