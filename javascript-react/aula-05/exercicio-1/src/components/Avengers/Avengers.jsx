import React from 'react'

import './Avengers.css'

import Hero from '../Hero/Hero'

export default class Avengers extends React.Component {

    renderHeroes() {
        return this.props.heroes.map((hero) => {
            return <Hero image={hero} />
        })
    }

    render() {
        return <div className="herois-container">
            {this.renderHeroes()}
        </div>
    }

}