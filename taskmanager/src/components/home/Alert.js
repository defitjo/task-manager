import React from 'react';

const Alerts = () => {
  return (
    <div className="ui card">
      <div clasNames="content">
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
                <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                <a>Helen Troy</a> added two pictures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
