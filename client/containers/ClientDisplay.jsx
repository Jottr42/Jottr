import React, { useState } from 'react';
import { ClientView } from '../components/ClientView';
import { CreateSession } from '../components/CreateSession';
//import '../stylesheets/ClientDisplay.scss';

const ClientDisplay = (props) => {
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
