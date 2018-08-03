import React from 'react'

import Button from '../generic/Button/Button'
import Select from '../generic/Select/Select'
import Input from '../generic/Input/Input'

export default class FormPost extends React.Component {

    constructor() {
        super()
        this.handdleChange = this.handdleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = this.getInitialState()
    }

    componentDidMount() {
        this.clearFormData()
    }

    handdleChange(e) {
        let state = this.state
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    getCategoriesOptions() {
        return [
            {
                value: 'Tragédia',
                text: 'Tragédia'
            },
            {
                value: 'Narutinho',
                text: 'Narutinho'
            }
        ]
    }

    getInitialState() {
        return {
            category: this.getCategoriesOptions()[0].value,
            title: '',
            text: ''
        }
    }

    clearFormData() {
        this.setState(this.getInitialState())
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmitForm(this.state)
        this.clearFormData()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Input
                    handdleChange={this.handdleChange}
                    name="title"
                    type="text"
                    placeholder="Titulo"
                    label="Titulo"
                    value={this.state.title}
                />
                <Input
                    handdleChange={this.handdleChange}
                    name="text"
                    type="text"
                    placeholder="Descrição"
                    label="Descrição"
                    value={this.state.text}
                />
                <Select label="Categoria"
                    name="category"
                    value={this.state.category}
                    options={this.getCategoriesOptions()}
                    handdleChange={this.handdleChange} />
                <Button classButton="success" type="submit" text="Inserir Post" />
            </form>
        )
    }
}