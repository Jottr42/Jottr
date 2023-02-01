import React, { useState } from 'react';
import { ClientView } from '../components/ClientView';
import { CreateSession } from '../components/CreateSession';
//import '../stylesheets/ClientDisplay.scss';

const ClientDisplay = ({ viewState, changeViewHandler, currentClient }) => {
  return (
    <div>
      {/* this needs to know the current client */}
      {!viewState && (
        <ClientView
          changeViewHandler={changeViewHandler}
          viewState={viewState}
          client={''}
          currentClient={currentClient}
        />
      )}
      {/* this needs to know the current session */}
      {viewState && (
        <CreateSession
          changeViewHandler={changeViewHandler}
          currentClient={currentClient}
        />
      )}
    </div>
  );
};

export default ClientDisplay;
