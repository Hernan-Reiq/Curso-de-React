import React, { Component } from "react";
import "./App.css";

const StylesCSS = (bg = '#456') => ({
  backgroundColor: bg,
  color: '#fff',
  height: '1000px',
  margin: '0 auto',
  width: '1000px'
})

const StyleCSS3 = {
  textShadow: '1px 1px 1px #000'
}

const Text = ({ children }) => {
  return (
    <h1 className="App-logo">{children}</h1>
  )
}

class App extends Component {
  render() {
    return (
      <div style={{...StyleCSS3, ...StylesCSS('#057')}}>
        <Text>Hernan Demorizi Ureña</Text>
      </div>
    )
  }
}

export default App;
