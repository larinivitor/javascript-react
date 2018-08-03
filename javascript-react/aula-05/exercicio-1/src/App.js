import React, { Component } from 'react';
import './App.css';

import capitaoAmerica from './assets/capitain.png'
import hulk from './assets/hulk.png'
import iron from './assets/iron.png'
import spider from './assets/spider.png'

import Avengers from './components/Avengers/Avengers'

class App extends Component {

  render() {
    const heroes = [capitaoAmerica, hulk, iron, spider]
    return <div className="app">
      <Avengers heroes={heroes} />
    </div>
  }
}
export default App;
