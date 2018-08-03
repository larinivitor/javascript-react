import React, { Component } from 'react';
import Loading from './components/generic/Loading/Loading'
import Input from './components/generic/Input/Input'
import TableHeroesContent from './components/TableHeroesContent/TableHeroesContent'
import FormHero from './components/FormHero/FormHero'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      heroes: [],
      filtredHeroes: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 5000)
  }


  onSubmit(hero) {
    let heroes = this.state.heroes
    // const id = (heroes.length + 1)
    let id = 1
    if (heroes.length) {
      id = heroes.reduce((a, b) => {
        return Math.max(a.id, b.id)
      }).id
    }
    hero.id = (id + 1)
    hero.exibir = true
    heroes.push(hero)
    this.updateHeroes(heroes)
  }

  onDelete(id) {
    let heroes = this.state.heroes.filter((item) => {
      return item.id !== id
    })
    this.updateHeroes(heroes)
  }

  updateHeroes(heroes) {
    this.setState({
      heroes,
      filtredHeroes: heroes
    })
  }

  isHeroesEmpty() {
    return !this.state.heroes.length
  }

  renderContent() {
    return <div className="row">
      <div className="col-md-6">
        <FormHero onSubmit={this.onSubmit} />
      </div>
      <div className="col-md-6" >
        <TableHeroesContent
          isTableEmpty={this.isHeroesEmpty()}
          heroes={this.state.filtredHeroes}
          onSearch={this.onSearch}
          onDelete={this.onDelete} />
      </div>
    </div >
  }

  onSearch(e) {
    let filtredHeroes = this.state.heroes.filter((item) => {
      return item.name.includes(e.target.value)
    })
    this.setState({
      filtredHeroes
    })
  }

  render() {
    return (
      <div>
        <Loading showLoader={this.state.loading} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
