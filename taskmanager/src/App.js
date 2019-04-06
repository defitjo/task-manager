import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/design/Menu';
import Home from './components/home/Home';
import NewTask from './components/tasks/NewTask';
import Join from './components/authentication/Join';
import Login from './components/authentication/Login';
import TaskInfo from './components/tasks/TaskInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={NewTask} />
            <Route path='/join' component={Join} />
            <Route path='/login' component={Login} />
            <Route path='/task/:id' component={TaskInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
