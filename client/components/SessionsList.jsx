import React from 'react';

const SessionsList = (props) => {
  // const allSessions = props.sessions.map((sess, i) => {
  //   <li>{sess.date}</li>
  // })

  return (
    <div>
      <h2>Sessions List</h2>
      <ul>
        <li>01/01/2022</li>
        <li>02/01/2022</li>
        <li>03/01/2022</li>
        <li>04/01/2022</li>
        <li>05/01/2022</li>
      </ul>
    </div>
  );
};

export default SessionsList;
