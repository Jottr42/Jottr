import React from 'react';
// import '../stylesheets/_ClientView.scss';
import '../stylesheets/styles.scss';

export function ClientView(props) {
  return (
    <div className="client-view">
      <div className="client-view-client-info">
        <h1>Client Info:</h1>
        <ul className="client-info-list">
          <li className="client-info-list-item">Client Name: Bob Turner</li>
          <li className="client-info-list-item">
            Client Email: bobturner99@gmail.com
          </li>
          <li className="client-info-list-item">Client Phone: 000-000-0000</li>
          <li className="client-info-list-item">Date of Birth: 01/01/1990</li>
        </ul>
      </div>
      <div className="client-view-client-sessions">
        <h1>Session History:</h1>
        <ul className="sessions-list">
          <li className="session-list-item">
            <p>Session 1 - 01/01/2022</p>
            <button className="session-list-item-btn">View</button>
          </li>
          <li className="session-list-item">
            <p>Session 1 - 01/01/2022</p>
            <button className="session-list-item-btn">View</button>
          </li>
          <li className="session-list-item">
            <p>Session 1 - 01/01/2022</p>
            <button className="session-list-item-btn">View</button>
          </li>
          <li className="session-list-item">
            <p>Session 1 - 01/01/2022</p>
            <button className="session-list-item-btn">View</button>
          </li>
          <li className="session-list-item">
            <p>Session 1 - 01/01/2022</p>
            <button className="session-list-item-btn">View</button>
          </li>
          <li className="session-list-item">
            <p>Session 1 - 01/01/2022</p>
            <button className="session-list-item-btn">View</button>
          </li>
        </ul>
        <button>Add Session</button>
      </div>
    </div>
  );
}
