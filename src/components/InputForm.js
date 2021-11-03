import React, { Component } from 'react';
import HighlightedCharacters from './HighlightedCharacters'
class InputForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.charactersCount = {}
    this.charactersLocation = {}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.charactersCount = {}
    this.charactersLocation = {}
    var newStr = event.target.value
    for(let i = 0; i < newStr.length; i++){
        if(newStr[i] in this.charactersCount){
            this.charactersCount[newStr[i]] += 1
        } else {
            this.charactersCount[newStr[i]] = 1
            this.charactersLocation[newStr[i]] = i;
        }
            
    }
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <p> {Object.keys(this.charactersCount)} </p>
        <HighlightedCharacters charactersCount={this.charactersCount} charactersLocation = {this.charactersLocation}></HighlightedCharacters>
      </div>
    );
  }
}

export default InputForm;