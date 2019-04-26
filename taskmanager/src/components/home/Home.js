import React, { Component } from 'react';
import Alert from './Alert';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import TaskOrder from '../tasks/TaskOrder';

class Home extends Component {
  render() {
    const { tasks, auth, alerts } = this.props;
    if (!auth.uid) return <Redirect to='/login' />

    return (
      <div className="ui stackable centered padded grid container">
        <div className="three column row">
          <div className="four wide column">
            <Alert alerts={alerts} />
          </div>
          <div className="one wide column"></div>
          <div className="six wide column">
            <div className="home">
              <div>
                <TaskOrder tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth,
    alerts: state.firestore.ordered.alerts
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tasks', orderBy: ['addedAt', 'desc'] },
    { collection: 'alerts', limit: 4, orderBy: ['time', 'desc'] }
  ])
)(Home);
