import React, { Component } from "react";
import "./App.css";
import { Validate } from "./Validate/Validate";
import { Char } from "./Char/Char";

class App extends Component {
  state = {
    actualText: "",
    textLength: 0,
  };

  countTextHandler = (event) => {
    this.setState({
      actualText: event.target.value,
      textLength: event.target.value.length,
    });
  };

  deleteCharHandler = (index) => {
    const text = this.state.actualText.split("");
    text.splice(index, 1);

    const updatedText = text.join("");
    this.setState({ actualText: updatedText });
  };

  render() {
    const charList = this.state.actualText.split("").map((ch, index) => {
      return (
        <Char
          text={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="container">
        <Validate textLength={this.state.textLength} />
        <input type="text" onChange={this.countTextHandler} />
        <p>Text Count: {this.state.textLength}</p>
        <div className="char">{charList}</div>
      </div>
    );
  }
}

export default App;

/*
1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (eg. in a paragraph). 2 Create a new component (> Validation Component) which receives the text length as a prop

3. Inside the Validation Component, either output "Text too short or "Text long enough* depending on the text length (e-9. take 5 as a minimum length) 4. Create another component ( Char Component) and style it as an inline box (> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid

black)

5. Render a list of Char Components where each Char Component receives a different letter of the entered text (in the initial input field) as a prop.

6. When you click a CharComponent, it should be removed from the entered text.

Hint: Keep in mind that JavaScript strings are basically arrays!
*/
