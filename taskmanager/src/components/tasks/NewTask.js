import React, { Component } from 'react';
import { newTask } from '../../store/action_creator/taskAction';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class NewTask extends Component {
  state = {
    title: "",
    description: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newTask(this.state);
    this.props.history.push('/');
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />
    return (
      <div className="ui two column centered grid">
        <div className="row">
          <div className="two column wide">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <h3 className="ui dividing header">Create Task</h3>
              <div className="required field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
                <label htmlFor="description">Task Description</label>
                <textarea rows="3" id="description" onChange={this.handleChange} />

                <div>
                  <button id="new-task-button" className="ui positive right labeled icon button">
                    <i className="tasks icon"></i>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newTask: (task) => dispatch(newTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
