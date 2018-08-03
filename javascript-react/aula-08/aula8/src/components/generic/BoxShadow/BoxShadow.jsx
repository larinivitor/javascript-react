import React from 'react'

import './BoxShadow.css'

export default class BoxShadow extends React.Component{
    render(){
        return <div className="BoxShadow">{this.props.children}</div>
    }
}