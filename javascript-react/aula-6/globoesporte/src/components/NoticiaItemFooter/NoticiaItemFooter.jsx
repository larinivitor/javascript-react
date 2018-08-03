import React from 'react'

import './NoticiaItemFooter.css'

export default class NoticiaItemFooter extends React.Component {

    render() {
        return <div className="NoticiaItemFooter">
            HÁ {this.props.tempo} - {this.props.categoria}
        </div>
    }


}