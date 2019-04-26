import React from 'react';

const TaskDesign = ({task}) => {
  return (
    <div className="ui cards">
      <div className="ui link fluid card">
        <div className="content">
          <div className="header">{task.title}</div>
          <div className="meta">New task by {task.userFirstName} {task.userLastName}</div>
          <div className="description">
            <span>{task.addedAt.toDate().toDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDesign;
