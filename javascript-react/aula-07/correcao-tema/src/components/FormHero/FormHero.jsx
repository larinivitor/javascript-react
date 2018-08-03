import React from 'react';

import Input from '../generic/Input/Input'
import Button from '../generic/Button/Button'
import Select from '../generic/Select/Select'

export default class FormHero extends React.Component {

    constructor() {
        super()
        this.handdleChange = this.handdleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearState = this.clearState.bind(this)
        this.state = this.getInitialState()
    }


    handleSubmit(e) {
        e.preventDefault()
        const dadosParaInserir = this.state
        this.props.onSubmit(dadosParaInserir)
        this.clearState()
    }

    handdleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    getInitialState() {
        return {
            name: '',
            alterEgo: '',
            team: this.getTeamOptions()[0].value,
        }
    }

    clearState() {
        this.setState(this.getInitialState())
    }

    getTeamOptions() {
        return [
            { text: 'Liga da Justiça', value: 'Liga da Justiça' },
            { text: 'Quarteto Fantástico', value: 'Quarteto Fantástico' },
            { text: 'Vingadores', value: 'Vingadores' },
        ]
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input placeholder="Nome" name="name" value={this.state.name} handdleChange={this.handdleChange} label="Nome" />
                <Input placeholder="Alter Ego" name="alterEgo" value={this.state.alterEgo} handdleChange={this.handdleChange} label="Alter Ego" />
                <Select label="Time" name="team" handdleChange={this.handdleChange} options={this.getTeamOptions()} value={this.state.team} />
                <div className="d-flex justify-content-end">
                    <div className="col-md-1">
                        <Button type="Button" onClick={this.clearState} classButton="success" text="Limpar" />
                    </div>
                    <div className="col-md-1">
                        <Button type="submit" classButton="primary" text="Inserir" />
                    </div>
                </div>
            </form>
        );
    }
}

