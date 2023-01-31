import React, { useState } from 'react';
import { ClientView } from '../components/ClientView';
import { CreateSession } from '../components/CreateSession';
//import '../stylesheets/ClientDisplay.scss';

const ClientDisplay = (props) => {
  //need to know which client is currently being viewed if we are in the ClientView:
  const [currentClient, setCurrentClient] = useState('');
  //need to know the current session if we are in the
  const [currentSession, setCurrentSession] = useState('');
  //make the request to backend here to grab all of the user's clients - should be coming back as an array, which we then pass down to client view
  return (
    <div>
      {/* this needs to know the current client */}
      {!props.viewState && (
        <ClientView
          changeViewHandler={props.changeViewHandler}
          viewState={props.viewState}
          client={''}
        />
      )}
      {/* this needs to know the current session */}
      {props.viewState && (
        <CreateSession changeViewHandler={props.changeViewHandler} />
      )}
    </div>
  );
};

export default ClientDisplay;
