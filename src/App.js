import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
// import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    hobby: "",
  };

  submitFormHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  render() {
    return (
      <div>
        <UserInput submit={this.submitFormHandler} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
