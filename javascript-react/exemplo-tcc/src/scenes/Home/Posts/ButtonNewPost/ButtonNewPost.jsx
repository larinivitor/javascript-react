import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './ButtonNewPost.css'

export default class ButtonNewPost extends React.Component {
    render() {
        return <button onClick={this.props.onClickButtonNewPost}className="ButtonNewPost" type="button">
        <FontAwesomeIcon icon="plus" />
    </button>
    }

}