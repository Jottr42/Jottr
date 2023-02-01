import React, { useEffect } from 'react';
import '../stylesheets/SessionsList.scss';

const SessionsList = ({
  currentClientSessions,
  setCurrentSession,
  currentClient,
}) => {
  // const allSessions = props.sessions.map((sess, i) => {
  //   <li>{sess.date}</li>
  // })
  const handleSessionListItemClick = (e) => {
    setCurrentSession({});
    const clickedSessionId = Number(e.target.id);
    const newCurrentSession = currentClientSessions.filter((sess) => {
      return sess.record_id === clickedSessionId;
    })[0];
    setCurrentSession(newCurrentSession);
  };

  const allSessions = currentClientSessions.map((sess, i) => {
    return (
      <li key={i} id={sess.record_id} onClick={handleSessionListItemClick}>
        {sess.date.slice(0, 10)}
      </li>
    );
  });

  useEffect(() => {
    console.log('currentClientSessions has been updated');
  }, [currentClientSessions, currentClient]);

  return (
    <div className="sessions-list-inner">
      <h2>Sessions List</h2>
      <ul>{allSessions}</ul>
    </div>
  );
};

export default SessionsList;
