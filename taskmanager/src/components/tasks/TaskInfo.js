import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const TaskInfo = (props) => {
  const { task, auth } = props;
  if (!auth.uid) return <Redirect to='/login' />
  if (task) {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{task.title}</div>
            <div className="description">
              <p>{task.description}</p>   
            </div>
            <div className="meta">
              <p>New task by {task.userFirstName} {task.userLastName}</p>
              <p>{task.addedAt.toDate().toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="centered" >
        <span>Loading...</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null

  return {
    task: task,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'tasks'
  }])
)(TaskInfo);
