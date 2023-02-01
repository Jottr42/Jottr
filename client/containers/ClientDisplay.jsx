import React, { useState } from 'react';
import { ClientView } from '../components/ClientView';
import { CreateSession } from '../components/CreateSession';
//import '../stylesheets/ClientDisplay.scss';

const ClientDisplay = ({
  viewState,
  changeViewHandler,
  currentClient,
  currentClientSessions,
  setCurrentSession,
  currentSession,
  setCurrentClientSessions,
  setSessionCreated,
}) => {
  return (
    <div>
      {/* this needs to know the current client */}
      {!viewState && (
        <ClientView
          changeViewHandler={changeViewHandler}
          viewState={viewState}
          client={''}
          currentClient={currentClient}
          currentClientSessions={currentClientSessions}
          setCurrentSession={setCurrentSession}
        />
      )}
      {/* this needs to know the current session */}
      {viewState && (
        <CreateSession
          changeViewHandler={changeViewHandler}
          currentClient={currentClient}
          currentClientSessions={currentClientSessions}
          setCurrentSession={setCurrentSession}
          currentSession={currentSession}
          setCurrentClientSessions={setCurrentClientSessions}
          setSessionCreated={setSessionCreated}
        />
      )}
    </div>
  );
};

export default ClientDisplay;
