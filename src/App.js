import React, { Component } from "react";
import "./App.css";

const Text = ({ children }) => {
  return (
    <h1 className="App-logo">{children}</h1>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Text>Hernan Demorizi Ureña</Text>
      </div>
    )
  }
}

export default App;
