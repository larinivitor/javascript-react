import React from 'react'

import { Alert, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = { shouldRedirectHome: false }
        this.goHome = this.goHome.bind(this)
    }

    goHome() {
        this.setState({
            shouldRedirectHome: true
        })
    }

    render() {
        if (this.state.shouldRedirectHome) {
            return <Redirect to='/home' />
        }

        return <div>
            <Button color="primary" onClick={this.goHome}>Ir para Home</Button>
            <Alert color='danger'>
                Estamos no Dashboard {this.props.match.params.id}
            </Alert>
        </div>
    }

}