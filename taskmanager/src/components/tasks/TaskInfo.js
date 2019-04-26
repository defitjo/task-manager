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
      <div id="task-info-container" className="ui grid container">
        <div id="task-info" className="five wide column centered">
          <div className="ui large header">
            {task.title}
          </div>
          <div className="description">
            <p id="task-description">{task.description}</p>
          </div>
          <div id="task-info-user" className="meta">
            <p>New task by {task.userFirstName} {task.userLastName}</p>
            <p id="task-info-date">{task.addedAt.toDate().toDateString()}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="ui grid container">
        <div className="two wide column centered">
          <div className="header">Loading...</div>
        </div>  
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
