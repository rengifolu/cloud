//client/components/App.js
import React, { Component } from 'react';
//import Barra from './Barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
//import logo from './nubenu.jpg';
//const logo = require('./nubenu.svg');




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Barra></Barra> */}
        <header className="App-header">
          <h1 className="App-title">Welcome to myCloud</h1>
          {/* <img src={logo} alt=''/> */}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <img src={logo} width="100" height="50"  alt=''/> */}
      </div>
    );
  }
}
export default App;