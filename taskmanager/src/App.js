import React, { Component } from 'react';
import './App.css';
import Menu from './components/design/Menu';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
