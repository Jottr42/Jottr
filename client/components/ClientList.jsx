import React, { useState } from 'react';
import '../stylesheets/ClientList.scss';

const ClientList = ({ clients, controlModal, setCurrentClient }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClientBtnClick = () => {
    controlModal(true);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClientClick = (event) => {
    console.log(event.target.id);
    console.log(clients);
    const chosenClient = clients.filter((client) => {
      return client.client_id === Number(event.target.id);
    })[0];
    setCurrentClient(chosenClient);
  };

  return (
    <div className="client-list-container">
      <div className="client-list">
        <input
          type="text"
          placeholder="Search Clients"
          value={searchTerm}
          onChange={handleSearch}
          className="client-list__search-input"
        />
        <div className="client-list__client-list">
          {clients
            .filter((client) =>
              client.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((client) => (
              <div
                key={client.client_id}
                className="client-list__client"
                id={client.client_id}
                onClick={handleClientClick}
              >
                {client.name}
              </div>
            ))}
        </div>
        <div className="client-list__add-client">
          <button className="add-client" onClick={handleAddClientBtnClick}>
            Add Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
