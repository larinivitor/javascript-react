import React, { Component } from 'react';

import Posts from './components/Posts/Posts'
import Input from './components/generic/Input/Input'
import Button from './components/generic/Button/Button'
import Select from './components/generic/Select/Select'
import FormPost from './components/FormPost/FormPost'
class App extends Component {

  constructor() {
    super()
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.state = {
      posts: []
    }
  }


  onSubmitForm(post) {
    let posts = this.state.posts
    posts.push(post)
    this.setState({
      posts
    })
  }

  onRemove(item) {
    console.log('vai remover o item', item)
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <FormPost onSubmitForm={this.onSubmitForm} />
          </div>
        </div>
        <div className="row">
          <Posts posts={this.state.posts} onRemove={this.onRemove} />
        </div >
      </div >
    )
  }
}

export default App;
