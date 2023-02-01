import React, { useEffect } from 'react';
import '../stylesheets/ClientView.scss';

export const ClientView = ({
  changeViewHandler,
  currentClient,
  currentClientSessions,
  setCurrentSession,
}) => {
  const viewBtnClickHandler = (e) => {
    //if we are adding a session, we remove all the prepopulation, else we set the current session to the session we want to view so we can prepopulate the createSession page.
    if (e.target.id === 'addSession') {
      setCurrentSession({});
    } else {
      const clickedSessionId = Number(e.target.id);
      const clickedSession = currentClientSessions.filter((sess) => {
        return sess.record_id === clickedSessionId;
      })[0];
      setCurrentSession(clickedSession);
    }
    changeViewHandler(true);
  };

  const allSessions = [];
  for (let i = 0; i < currentClientSessions.length; i++) {
    allSessions.push(
      <li className="session-list-item" key={i}>
        <p>
          {currentClientSessions[i].date.slice(0, 10)} -
          {currentClientSessions[i].goal}
        </p>
        <button
          id={currentClientSessions[i].record_id}
          className="session-list-item-btn"
          onClick={viewBtnClickHandler}
        >
          View
        </button>
      </li>
    );
  }

  useEffect(() => {
    console.log('currentClientSessions has been updated');
  }, [currentClientSessions]);

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
          <button
            className="session-button"
            id={'addSession'}
            onClick={viewBtnClickHandler}
          >
            Add Session
          </button>
        )}
      </div>
    </div>
  );
};
