import React from 'react';

const Alerts = (props) => {
  const { alerts } = props;
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          <h3 className="header-3">Task Timeline</h3>
        </div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Activity</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                { alerts && alerts.map(alert => {
                  return <li key={alert.id}>
                    <span>{alert.user}</span>
                    <span>{alert.description}</span>
                    <div>{alert.time.toDate().toDateString()}</div>
                  </li>
                }) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
