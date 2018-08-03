import React from 'react'

import NoticiaItemCategoria from '../NoticiaItemCategoria/NoticiaItemCategoria'
import NoticiaItemImagem from '../NoticiaItemImagem/NoticiaItemImagem'
import NoticiaItemDescricao from '../NoticiaItemDescricao/NoticiaItemDescricao'
import NoticiaItemFooter from '../NoticiaItemFooter/NoticiaItemFooter'
import NoticiaItemTitulo from '../NoticiaItemTitulo/NoticiaItemTitulo'


import './NoticiaItem.css'


export default class NoticiaItem extends React.Component {

	render() {
		return <div className="NoticiaItem">
			<NoticiaItemImagem imagem={this.props.noticia.imagem} />
			<div className="NoticiaItem--content">
				<NoticiaItemCategoria tag={this.props.noticia.categoria} />	
				<NoticiaItemTitulo titulo={this.props.noticia.titulo} />
				<NoticiaItemDescricao descricao={this.props.noticia.descricao} />
				<NoticiaItemFooter tempo={this.props.noticia.tempo} categoria={this.props.noticia.categoria} />
			</div>
		</div>
	}
}