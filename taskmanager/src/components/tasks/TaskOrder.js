import React from 'react';
import TaskDesign from './TaskDesign';
import { Link } from 'react-router-dom';

const TaskOrder = ({tasks}) => {
  return (
    <div className="task-order">
      { tasks && tasks.map(task => {
        return (
          <Link to={'/task/' + task.id} key={task.id}>
            <TaskDesign task={task} />
          </Link>
        )
      }) }
    </div>
  )
}

export default TaskOrder;

