import React from 'react'

import Input from '../../../components/generic/Input/Input'
import TextArea from '../../../components/generic/TextArea/TextArea'
import Select from '../../../components/generic/Select/Select'
import Button from '../../../components/generic/Button/Button'
import Alert from '../../../components/generic/Alert/Alert'
import ContentShadow from '../../../components/generic/ContentShadow/ContentShadow'

import './MovieForm.css'

import CateroryService from '../../../services/CategoryService'
import MovieService from '../../../services/MovieService'

const MOVIE_SAVED_MESSAGE = 'Filme Inserido com Sucesso'

export default class MovieForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()


        this.handleChange = this.handleChange.bind(this)
        this.onMovieRegisterButtonClick = this.onMovieRegisterButtonClick.bind(this)
    }

    componentDidMount() {
        CateroryService.categories().then((resp) => {
            this.setState({
                categories: resp.data,
            })
        })
    }
    getInitialState() {
        return {
            title: '',
            description: '',
            category: '',
            image: '',
            categories: []
        }
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onMovieRegisterButtonClick() {
        MovieService.create(this.state).then((result) => {
            this.setState(this.getInitialState())
            this.setAlert('success', MOVIE_SAVED_MESSAGE)
        }).catch(resp => {
            this.setAlert('danger', resp.response.data.error)
        })
    }

    setAlert(type, message) {
        this.setState({
            alert: {
                type,
                message
            }
        })
    }

    renderAlert() {
        return this.state.alert ? <Alert classAlert={this.state.alert.type} text={this.state.alert.message} /> : undefined
    }

    render() {
        return (
            <div className="MovieForm">
                <div className="MovieForm--content">
                    <ContentShadow>
                        {this.renderAlert()}
                        <Input placeholder="Digite o titulo do filme" name="title" type="text" value={this.state.title} handleChange={this.handleChange} label="Titulo" />
                        <TextArea placeholder="Digite a descrição" name="description" type="text" value={this.state.description} handleChange={this.handleChange} label="Descrição" />
                        <Input placeholder="Digite a url da imagem" name="image" type="text" value={this.state.image} handleChange={this.handleChange} label="Imagem" />
                        <Select showEmptyOption={true} 
                        name="category" 
                        options={this.state.categories} 
                        label="Categoria" value={this.state.category} 
                        handleChange={this.handleChange} />
                        <div className="pull-right">
                            <Button isOutline={true} classButton="primary" type="button" onClick={this.onMovieRegisterButtonClick} text="Registrar" />
                        </div>
                    </ContentShadow>
                </div>
            </div>
        )

    }

}