import React, { useState } from 'react';
import '../stylesheets/CreateSession.scss';

export function CreateSession(props) {
  const [notes, setNotes] = useState('these are all my old notes:');

  const handleNotesChange = (event) => {
    // 👇️ access textarea value
    setNotes(event.target.value);
    console.log(event.target.value);
  };
  const handleBackBtnClick = () => {
    props.changeViewHandler(false);
  };

  return (
    <div className="create-session">
      <textarea
        id="notes"
        name="notes"
        value={notes}
        onChange={handleNotesChange}
      />

      <hr />

      <button disabled={!notes}>Submit</button>
      <button disabled={!notes}>Delete Session</button>
      <button onClick={handleBackBtnClick}> Back</button>
    </div>
  );
}
