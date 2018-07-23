import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column"
        }}
      >
      <div style={{backgroundColor: "green", height: "60px" }}>Header</div>
      <div style={{backgroundColor: "yellow", height: "60px"}}>SubHeader</div>
      <div style={{backgroundColor: "green", height: "240px"}}>Content</div>
      <div style={{backgroundColor: "purple", height: "240px"}}>Image</div>

      </div>
    );
  }
}

export default App;
