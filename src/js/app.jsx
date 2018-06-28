import React from 'react';
import { hot } from 'react-hot-loader';
import Article from './article'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  value: 'English',
                  language:'Choose your language: ',
                  icon: require("../assets/images/en.png")
                };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    switch(event.target.value){
      case "Bulgarian" :
            this.setState({icon: require("../assets/images/bg.png")})
            this.setState({language: "Избери език: "})
            break
      case "German" :
      this.setState({icon: require("../assets/images/de.png")})
      this.setState({language: "Sprache wählen: "})
      break
      default :
      this.setState({icon: require("../assets/images/en.png")})
      this.setState({language: "Choose your language: "})


    }
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

        <Article title={this.state.value} 
          source={this.state.icon}
          >
          {this.state.text}
        </Article >
      </div>
  )}
};

export default hot(module)(App);
