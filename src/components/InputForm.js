import React from "react";
import HighlightedCharacters from "./HighlightedCharacters";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.charactersCount = {};
    this.charactersLocation = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.charactersCount = {};
    this.charactersLocation = {};
    var newStr = event.target.value;
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] in this.charactersCount) {
        this.charactersCount[newStr[i]] += 1;
      } else {
        this.charactersCount[newStr[i]] = 1;
        this.charactersLocation[newStr[i]] = i;
      }
    }
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="App" title="ca">
        <label>Please enter text in the input box below: </label>
        <hr />
        <textarea value={this.state.value} onChange={this.handleChange} />

        <p> {Object.keys(this.charactersCount)} </p>
        <p>The 5 highlited characters below are the most repeated ones:</p>
        <HighlightedCharacters
          charactersCount={this.charactersCount}
          charactersLocation={this.charactersLocation}
        ></HighlightedCharacters>
      </div>
    );
  }
}

export default InputForm;
