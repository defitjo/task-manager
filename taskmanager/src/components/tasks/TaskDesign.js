import React from 'react';

const TaskDesign = ({task}) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{task.title}</div>
          <div className="meta">New Task by {task.userFirstName} {task.userLastName}</div>
          <div className="description">
            <span>{task.addedAt.toDate().toDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDesign;
