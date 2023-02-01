import React from 'react';
import SessionsList from '../components/SessionsList';
import ClientList from '../components/ClientList';

const SideDisplay = ({
  viewState,
  clients,
  setClients,
  controlModal,
  setCurrentClient,
  user,
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
      {viewState && <SessionsList user={user} />}
    </div>
  );
};

export default SideDisplay;
