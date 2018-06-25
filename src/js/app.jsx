import React from 'react';
import { hot } from 'react-hot-loader';
import Article from './article'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'English',
                  text:'Some text...',
                  language:'Choose your language:',
                  headText:'Write something to be translated:'
                };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeInput(event){
    this.setState({text: event.target.value})
  }

  render(){
    const text = this.state.text;
    const language = this.state.language
    const headText = this.state.headText

    return(
      <div className="article">
      <label>
        {language}
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Bulgarian">Bulgarian</option>
          <option value="English">English</option>
          <option value="German">German</option>
        </select>
      </label>

      <label>
        {headText}
        <input placeholder={text} onChange={this.handleChangeInput}/>
      </label>
        <Article title={this.state.value}>{this.state.text}</Article>
      </div>
  )}
};

export default hot(module)(App);
