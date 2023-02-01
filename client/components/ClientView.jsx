import React from 'react';
import '../stylesheets/ClientView.scss';

export const ClientView = ({ changeViewHandler, currentClient }) => {
  const viewBtnClickHandler = () => {
    changeViewHandler(true);
  };

  const allSessions = [];
  for (let i = 0; i < 5; i++) {
    allSessions.push(
      <li className="session-list-item" key={i}>
        <p>
          Session {i} - {i}/01/2022
        </p>
        <button className="session-list-item-btn" onClick={viewBtnClickHandler}>
          View
        </button>
      </li>
    );
  }
  //we will be recieving a current client, but if a specific client has not been picked yet, we will just render a div that says please choose a client
  return (
    <div className="client-view">
      <div className="client-view-client-info">
        <h1>Client Info:</h1>
        <ul className="client-info-list">
          <li className="client-info-list-item">
            Client Name: {currentClient.name}
          </li>
          <li className="client-info-list-item">
            Client Email: {currentClient.email}
          </li>
        </ul>
      </div>
      <div className="client-view-client-sessions">
        <h1>Session History:</h1>
        <ul className="sessions-list">{allSessions}</ul>
        {currentClient.client_id && (
          <button onClick={viewBtnClickHandler}>Add Session</button>
        )}
      </div>
    </div>
  );
};
