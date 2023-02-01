import React, { useEffect, useState } from 'react';
import SessionsList from '../components/SessionsList';
import ClientList from '../components/ClientList';
import '../stylesheets/Navbar.scss';

const SideDisplay = ({
  viewState,
  clients,
  setClients,
  controlModal,
  setCurrentClient,
  currentClient,
  currentClientSessions,
  setCurrentSession,
}) => {
  return (
    <div>
      {!viewState && (
        <ClientList
          controlModal={controlModal}
          clients={clients}
          setCurrentClient={setCurrentClient}
          setClients={setClients}
        />
      )}
      {viewState && (
        <SessionsList
          currentClientSessions={currentClientSessions}
          setCurrentSession={setCurrentSession}
        />
      )}
    </div>
  );
};

export default SideDisplay;
