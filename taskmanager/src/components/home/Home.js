import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div class="ui two column divided stackable centered padded grid">
        <div class="row">
          <div class="four wide column">
            <h3>Alerts</h3>
            <div className="alerts">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minus corporis ullam, dolor possimus laboriosam libero
                adipisci doloribus officia ea in porro fugit molestiae
                architecto veniam eum eaque natus molestias numquam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nihil aperiam deleniti hic possimus sed quo accusantium
                voluptas iure nostrum dicta minima nobis perferendis
                repudiandae nisi atque veniam et, provident laudantium.
              </p>
            </div>
          </div>
          <div class="ten wide column">
            <div className="content">
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

