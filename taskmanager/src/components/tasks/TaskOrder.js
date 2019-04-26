import React from 'react';
import TaskDesign from './TaskDesign';
import { Link } from 'react-router-dom';

const TaskOrder = ({tasks}) => {
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="center aligned header">
          <h3 className="header-3">Tasks</h3>
        </div>
      </div>
      <div className="content">
        <h4 className="ui sub center aligned header">Activity</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                { tasks && tasks.map(task => {
                  return <Link to={'/task/' + task.id} key={task.id}>
                    <TaskDesign task={task} />
                  </Link>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskOrder;

