import React, { useEffect, useState } from 'react';
import SessionsList from '../components/SessionsList';
import ClientList from '../components/ClientList';

const SideDisplay = ({
  viewState,
  clients,
  setClients,
  controlModal,
  setCurrentClient,
  currentClient,
  currentClientSessions,
}) => {
  return (
    <div>
      {!viewState && (
        <ClientList
          controlModal={controlModal}
          clients={clients}
          setCurrentClient={setCurrentClient}
        />
      )}
      {viewState && (
        <SessionsList currentClientSessions={currentClientSessions} />
      )}
    </div>
  );
};

export default SideDisplay;
