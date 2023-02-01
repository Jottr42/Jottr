import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SessionsList = ({ user }) => {
  // const allSessions = props.sessions.map((sess, i) => {
  //   <li>{sess.date}</li>
  // })
  const { user_id } = user;

  const [allSession, setAllSession] = useState();

  useEffect(() => {
    const { user_id } = user;
    console.log(`USERID  ============`, user_id);
    axios({
      method: 'GET',
      url: `http://localhost:3000/record/allRecords/${user_id}`,
    })
      .then((response) => {
        console.log(`GET ALL RECORDS====`, response.data);
      })
      .catch((err) => {
        console.log(`Error in useEffect getClients`, err);
      });
  }, []);

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
