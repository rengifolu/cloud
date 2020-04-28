//client/components/App.js
import React, { Component } from "react";
import Carrousel from "./Carrousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

//import logo from './nubenu.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">myCloud-</h1>
          {/* <img src={logo} alt=''/> */}
        </header>
        <p className="App-intro">To  get fgstarted</p>
        <Carrousel></Carrousel>
      </div>
    );
  }
}
export default App;
