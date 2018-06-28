import React, { Component } from 'react'

class Article extends Component{

  render(){
    return(
      <div>
        <h1>{this.props.children}</h1>
        <img src={this.props.source}/>
      </div>
  )}
}

export default Article;
