import React from 'react'

export default class Watch extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, this.props.time)
    }


    render() {
        return <h1>Agora são {this.state.time}</h1>
    }
}