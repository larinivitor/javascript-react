import React, { Component } from 'react';
import './App.css';

import Post from './components/Post/Post'
import Watch from './components/Watch/Watch'

class App extends Component {

  getPosts() {
    return [
      {
        title: "Titulo com prop",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
      },
      {
        title: "Titulo com prop",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
      },
      {
        title: "Titulo com prop",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
      },
      {
        title: "Titulo com prop",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
      },
    ]
  }

  renderPosts() {
    return this.getPosts().map((post, key) => {
      return <Post key={key} title={post.title} text={post.text} />
    })
  }

  render() {
    return (
      <div>
        <Watch time="1000" />
        <div className="App">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default App;
