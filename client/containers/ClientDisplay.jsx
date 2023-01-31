import React from 'react';
import { ClientView } from '../components/ClientView';
import { CreateSession } from '../components/CreateSession';
//import '../stylesheets/ClientDisplay.scss';

const ClientDisplay = (props) => {
  return (
    <div>
      {!props.viewState && (
        <ClientView
          changeViewHandler={props.changeViewHandler}
          viewState={props.viewState}
        />
      )}
      {props.viewState && (
        <CreateSession changeViewHandler={props.changeViewHandler} />
      )}
    </div>
  );
};

export default ClientDisplay;
