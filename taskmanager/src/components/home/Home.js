import React, { Component } from 'react';
import Alert from './Alert';

class Home extends Component {
  render() {
    return (
      <div className="ui three column stackable centered padded grid">
        <div className="row">
          <Alert />
          <div className="one wide column"></div>
          <div className="six wide column">
            <div className="home">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur facere delectus minus necessitatibus reiciendis
                odit atque corrupti sint ipsum pariatur aspernatur,
                recusandae architecto suscipit aliquam nostrum labore
                quaerat sit. Corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
