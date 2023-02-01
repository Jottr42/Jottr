import React from 'react';
import SessionsList from '../components/SessionsList';
import ClientList from '../components/ClientList';

const SideDisplay = ({
  viewState,
  clients,
  setClients,
  controlModal,
  setCurrentClient,
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
      {viewState && <SessionsList />}
    </div>
  );
};

export default SideDisplay;
