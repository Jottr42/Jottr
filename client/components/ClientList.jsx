import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../stylesheets/ClientList.scss';

const ClientList = ({
  clients,
  controlModal,
  setCurrentClient,
  setClients,
}) => {
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

  const handleRemoveClientClick = (event) => {
    const client_id = Number(event.target.id);
    const confirmDeletion = confirm(
      `Are you sure you want to remove this client?`
    );
    if (!confirmDeletion) return;
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/client/${client_id}`,
    })
      .then((response) => {
        console.log(response.data);
        setClients((prev) => {
          const newClientList = [];
          for (let client of prev) {
            if (client.client_id !== client_id) {
              newClientList.push(client);
            }
          }
          return newClientList;
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
              >
                <p onClick={handleClientClick} id={client.client_id}>
                  {client.name}
                </p>
                <button
                  className="remove-btn"
                  type="button"
                  id={client.client_id}
                  onClick={handleRemoveClientClick}
                >
                  Remove
                </button>
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
