import React, { useState } from 'react';
import axios from 'axios';

export function CreateSession({ currentClient, changeViewHandler }) {
  const [notes, setNotes] = useState('these are all my old notes:');

  const handleNotesChange = (event) => {
    // 👇️ access textarea value
    setNotes(event.target.value);
    console.log(event.target.value);
  };
  const handleBackBtnClick = () => {
    changeViewHandler(false);
  };

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

      console.log(`INFO=======`, info.data);
    } catch (error) {
      console.log(`Error in CreateSession`, error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSessionSubmit}>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={handleNotesChange}
        />

        <hr />

        <label htmlFor="sessionDate">
          <input type="date" id="sessionDate" name="sessionDate" />
        </label>
        <label htmlFor="sessionGoals">
          Session Goal:
          <input type="text" id="sessionGoals" />
        </label>
        <label htmlFor="nextSessionGoals">
          Next Session Goal:
          <input type="text" id="nextSessionGoals" name="nextSessionGoals" />
        </label>

        <button type="submit" disabled={!notes}>
          Submit
        </button>
      </form>

      <button disabled={!notes}>Delete Session</button>
      <button onClick={handleBackBtnClick}> Back</button>
    </div>
  );
}
