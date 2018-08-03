import React from 'react'

import NoticiaItem from '../NotificaItem/NoticiaItem'

import './Noticias.css'

export default class Noticias extends React.Component {

	renderNoticias() {
		return this.props.noticias.map((item, key) => {
			return <NoticiaItem key={key} noticia={item} />
		})
	}

	render() {
		return <div>
			{this.renderNoticias()}
		</div>
	}
}