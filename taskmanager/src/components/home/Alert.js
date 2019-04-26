import React from 'react';

const Alerts = (props) => {
  const { alerts } = props;
  return (
    <div className="ui card centered">
      <div className="content">
        <div className="ui sub center aligned large header">What's New</div>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                { alerts && alerts.map(alert => {
                  return <li className="ui list" key={alert.id}>
                    <span className="alert-user">{alert.user} </span>
                    <span>{alert.description}</span>
                    <div className="alert-date">{alert.time.toDate().toDateString()}</div>
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
