import React from 'react';
import '../stylesheets/SessionsList.scss';


const SessionsList = ({ currentClientSessions }) => {
  // const allSessions = props.sessions.map((sess, i) => {
  //   <li>{sess.date}</li>
  // })

  const allSessions = currentClientSessions.map((sess, i) => {
    return (
      <li key={i} id={sess.record_id}>
        {sess.date.slice(0, 10)}
      </li>
    );
  });

  return (
    <div className="sessions-list-inner">
      <h2>Sessions List</h2>
      <ul>{allSessions}</ul>
    </div>
  );
};

export default SessionsList;
