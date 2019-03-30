import React, { Component } from 'react';

class NewTask extends Component {
  state = {
    title: "",
    description: ""
  }
  render() {
    return (
      <form className="ui form">
        <h3 className="ui dividing header">Create Task</h3>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" />
          <label htmlFor="description">Description</label>
          <textarea rows="3"></textarea>
          <div className="ui submit button">Submit</div>
        </div>
      </form>
    )
  }
}

export default NewTask;
