import React, { Component } from 'react';
import './content.css'
import Article from './Article/Article.js'


class Content extends Component {
  render () {
    return (
      <div className = "content">
        <br />
        <h1 id="construction"><i>This is is currently under construction</i> </h1>
        <br />
        <Article name="Defined in instantiation" />
      </div>
    )
  }
}

export default Content;