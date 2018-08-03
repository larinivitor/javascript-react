import React from 'react'

import Button from '../../../../components/generic/Button/Button'

import './MovieCard.css'

export default class MovieCard extends React.Component {

    render() {
        return <div className="card">
            <img alt="" className="MovieCard-image" src={this.props.image} />
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <Button classButton="primary" isOutline={true} onClick={this.props.onClickDescriptionButton} text="Sinopse" />
                <div className="pull-right">
                    <Button classButton="danger" isOutline={true} onClick={this.props.onClickDeleteButton} text="Excluir" />
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted">{this.props.footer}</small>
            </div>
        </div>
    }

}