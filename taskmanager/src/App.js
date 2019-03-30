import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/design/Menu';
import Home from './components/home/Home';
import NewTask from './components/tasks/NewTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={NewTask} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
