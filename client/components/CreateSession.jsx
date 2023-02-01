import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function CreateSession({
  currentClient,
  changeViewHandler,
  setCurrentSession,
  currentSession,
  setCurrentClientSessions,
  currentClientSessions,
  setSessionCreated,
}) {
  const [notes, setNotes] = useState('these are all my old notes:');
  let textAreaVal = currentSession.session_notes
    ? currentSession.session_notes
    : '';
  let sessionDateVal = currentSession.date
    ? currentSession.date.slice(0, 10)
    : '';
  let sessionGoalVal = currentSession.goal ? currentSession.goal : '';
  let upcomingVal = currentSession.upcoming ? currentSession.upcoming : '';

  //if we are viewing an existing session, we setNotes to that sessions nots
  console.log(currentSession, 'currentSession in createSession');
  const handleNotesChange = (event) => {
    // 👇️ access textarea value
    setNotes(event.target.value);
    console.log(event.target.value);
  };
  const handleBackBtnClick = () => {
    changeViewHandler(false);
  };

  useEffect(() => {
    console.log(currentSession, 'rerendering the sessions list');
  }, [currentSession, currentClientSessions]);

  //   {
  //     "date": "2022-01-28",
  //     "goal": "work on something important",
  //     "session_notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
  //     "upcoming": "work on getting something better for next session",
  //     "client_id": "2"
  // }

  const handleSessionSubmit = async (event) => {
    event.preventDefault();
    const session_notes = event.target[0].value;
    const date = event.target[1].value;
    const goal = event.target[2].value;
    const upcoming = event.target[3].value;
    const { client_id } = currentClient;

    console.log(`current client ====`, currentClient);

    try {
      const info = await axios.post(`http://localhost:3000/record`, {
        date,
        goal,
        session_notes,
        upcoming,
        client_id,
      });
      setSessionCreated(true);
      changeViewHandler(false);

      console.log(`INFO=======`, info.data);
    } catch (error) {
      console.log(`Error in CreateSession`, error);
    }
  };

  //handling record/session deletions
  const handleDeleteSessionClick = () => {
    const toBeDeletedRecordID = currentSession.record_id;
    const confirmSessionDeletion = confirm(
      'Are you sure you want to delete this client session?'
    );
    if (!confirmSessionDeletion) return;
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/record/${toBeDeletedRecordID}`,
    })
      .then((response) => {
        setCurrentSession({});
        setCurrentClientSessions((prev) => {
          const newClientSessionsList = [];
          for (let session of prev) {
            if (session.session_id != toBeDeletedRecordID) {
              newClientSessionsList.push(session);
            }
          }
          return newClientSessionsList;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-session">
      <form onSubmit={handleSessionSubmit}>
        <textarea
          id="notes"
          name="notes"
          defaultValue={textAreaVal}
          key={textAreaVal}
          onChange={handleNotesChange}
        />

        <hr />

        <label htmlFor="sessionDate">
          <input
            type="date"
            id="sessionDate"
            key={sessionDateVal}
            name="sessionDate"
            defaultValue={sessionDateVal}
          />
        </label>
        <label htmlFor="sessionGoals">
          Session Goal:
          <input
            type="text"
            id="sessionGoals"
            defaultValue={sessionGoalVal}
            key={sessionGoalVal}
          />
        </label>
        <label htmlFor="nextSessionGoals">
          Next Session Goal:
          <input
            type="text"
            id="nextSessionGoals"
            name="nextSessionGoals"
            defaultValue={upcomingVal}
            key={upcomingVal}
          />
        </label>

        <button type="submit" disabled={!notes}>
          Submit
        </button>
      </form>

      <button disabled={!notes} onClick={handleDeleteSessionClick}>
        Delete Session
      </button>
      <button onClick={handleBackBtnClick}> Back</button>
    </div>
  );
}
