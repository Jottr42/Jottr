import React from 'react';
import { ClientView } from '../components/ClientView';
import '../stylesheets/styles.scss';

const ClientDisplay = (props) => {
  const showClientView = true;
  const showSessionView = false;

  return <div>{showClientView && <ClientView />}</div>;
};

export default ClientDisplay;
