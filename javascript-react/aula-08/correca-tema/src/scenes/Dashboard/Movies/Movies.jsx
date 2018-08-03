import React from 'react'

import MovieCard from './MovieCard/MovieCard'
import Modal from '../../../components/generic/Modal/Modal'
import Jumbotron from '../../../components/generic/Jumbotron/Jumbotron'

import MovieService from '../../../services/MovieService'

import './Movie.css'

export default class Movies extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedMovie: {},
            selectedMovieToDelete: {},
            movies: []
        }

        this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
        this.onClickDescriptionButton = this.onClickDescriptionButton.bind(this)
        this.onCloseModalSelectedMovie = this.onCloseModalSelectedMovie.bind(this)
        this.onCloseModalSelectedMovieToDelete = this.onCloseModalSelectedMovieToDelete.bind(this)
        this.deleteMovie = this.deleteMovie.bind(this)
    }


    componentDidMount() {
        this.loadMovies()
    }

    onClickDeleteButton(selectedMovieToDelete) {
        this.setState({
            selectedMovieToDelete
        })
    }
    onClickDescriptionButton(selectedMovie) {
        this.setState({
            selectedMovie
        })
    }
    deleteMovie(id) {
        MovieService.delete(id).then(() => {
            this.loadMovies()
        }).finally(() => {
            this.onCloseModalSelectedMovieToDelete()
        })
    }

    loadMovies() {
        MovieService.movies().then((resp) => {
            this.setState({
                movies: resp
            })
        })
    }

    renderMovies() {
        if (this.state.movies.length) {
            const movies = this.state.movies.map((movie) => {
                return <div key={movie.id} className="Movies--item">
                    <MovieCard
                        image={movie.image}
                        title={movie.title}
                        text={movie.text}
                        footer={movie.category}
                        onClickDeleteButton={() => this.onClickDeleteButton(movie)}
                        onClickDescriptionButton={() => this.onClickDescriptionButton(movie)}
                    />
                </div>
            })
            return <div className="Movies--content">
                {movies}
            </div>
        }
        return <div className="Movies--empty">
            <Jumbotron title="Você ainda não possui filmes cadastrados" description="Acesse o menu de cadastro para cadastrar seus filmes." />
        </div>
    }

    onCloseModalSelectedMovie() {
        this.setState({
            selectedMovie: {}
        })
    }

    onCloseModalSelectedMovieToDelete() {
        this.setState({
            selectedMovieToDelete: {}
        })
    }

    render() {
        return <div className="Movies">
            <Modal show={this.state.selectedMovie.text}
                text={this.state.selectedMovie.text}
                title={this.state.selectedMovie.title}
                onClose={this.onCloseModalSelectedMovie}
            />
            <Modal show={this.state.selectedMovieToDelete.text}
                text={`Deseja excluir o filme ${this.state.selectedMovieToDelete.title} ?`}
                title="Confirmação"
                onClose={this.onCloseModalSelectedMovieToDelete}
                classButtonAction="danger"
                onClickButtonAction={() => this.deleteMovie(this.state.selectedMovieToDelete.id)}
                textButtonAction="Excluir"
            />
            {this.renderMovies()}
        </div>
    }

}