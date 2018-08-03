import CONFIG from '../config'
import axios from 'axios'

import LoginService from './LoginService'
import CategoryService from './CategoryService'

export default class Movie {

    static create(movie) {
        return axios.post(`${CONFIG.API_URL_BASE}/createMovieNew`,
            {
                'title': movie.title,
                'description': movie.description,
                'category': movie.category,
                'image': movie.image
            },
            {
                headers: {
                    authorization: LoginService.getLoggedUser(),
                    'Content-Type': 'application/json',
                }
            }

        )
    }

    getHeader() {
        return {
            authorization: LoginService.getLoggedUser(),
            'Content-Type': 'application/json',
        }
    }

    static movies() {
        const token = LoginService.getLoggedUser()
        return CategoryService.categories().then((result) => {
            const categories = result.data
            return axios.get(`${CONFIG.API_URL_BASE}/movies`,
                {
                    headers: {
                        authorization: token,
                        'Content-Type': 'application/json',
                    }
                }
            ).then((resultMovies) => {
                return resultMovies.data.movies.map((movie) => {
                    const movieCategory = categories.find((category) => { 
                        return category.value === movie.category })
                    movie.category = movieCategory.text
                    return movie
                })
            })
        })

    }

    static delete(id) {
        return axios.post(`${CONFIG.API_URL_BASE}/deleteMovie`,
            {
                id
            },
            {
                headers: {
                    authorization: LoginService.getLoggedUser(),
                    'Content-Type': 'application/json',
                }
            }

        )
    }
}

