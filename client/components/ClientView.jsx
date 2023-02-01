import React from 'react';
import '../stylesheets/ClientView.scss';

export const ClientView = ({
  changeViewHandler,
  currentClient,
  currentClientSessions,
}) => {
  const viewBtnClickHandler = () => {
    changeViewHandler(true);
  };
  console.log('currentClientSessions', currentClientSessions);
  const allSessions = [];
  for (let i = 0; i < currentClientSessions.length; i++) {
    allSessions.push(
      <li
        className="session-list-item"
        key={i}
        id={currentClientSessions[i].record_id}
      >
        <p>
          {currentClientSessions[i].date.slice(0, 10)} -
          {currentClientSessions[i].goal}
        </p>
        <button className="session-list-item-btn" onClick={viewBtnClickHandler}>
          View
        </button>
      </li>
    );
  }

  return (
    <div className="client-view">
      <div className="client-info-section">
        <div className="client-info-header">
          <h1>Client Info</h1>
        </div>
        <ul className="client-info-list">
          <li className="client-info-list-item">
            Client Name: {currentClient.name}
          </li>
          <li className="client-info-list-item">
            Client Email: {currentClient.email}
          </li>
        </ul>
      </div>
      <div className="client-session-section">
        <div className="client-session-header">
          <h1>Session History</h1>
        </div>
        <ul className="sessions-list">{allSessions}</ul>
        {currentClient.client_id && (
          <button className="session-button" onClick={viewBtnClickHandler}>
            Add Session
          </button>
        )}
      </div>
    </div>
  );
};
