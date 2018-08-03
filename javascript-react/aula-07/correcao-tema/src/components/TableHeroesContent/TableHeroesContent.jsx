import React from 'react'

import TableHeroes from './TableHeroes/TableHeroes'
import Jumbotron from '../generic/Jumbotron/Jumbotron'
import Input from '../generic/Input/Input'

export default class TableHeroesContent extends React.Component {


    renderContent() {
        return this.props.isTableEmpty ?
            <Jumbotron titulo="Você ainda não tem heróis cadastrados" subtitulo="Cadastre alguns pô" /> 
            : <div>
                <Input label="Pesquisar" handdleChange={this.props.onSearch}
                 placeholder="Digite para pesquisar por nome" />
                <TableHeroes onDelete={this.props.onDelete} heroes={this.props.heroes} />
            </div>
    }

    render() {
        return this.renderContent()
    }

}