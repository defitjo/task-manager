import React, { Component } from 'react';

class NewTask extends Component {
  state = {
    title: "",
    description: ""
  }
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="row">
          <div className="two column wide">
            <form className="ui form">
              <h3 className="ui dividing header">Create Task</h3>
              <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" />
                <label htmlFor="description">Description</label>
                <textarea rows="3" />
                <div id="new-submit" className="primary ui animated submit button" tabindex="0">
                  <div className="visible content">Submit</div>
                  <div className="hidden content">
                    <i className="tasks icon"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTask;
