import React, { useState } from 'react';
import '../stylesheets/ClientList.scss';

const ClientList = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  //this should be replaced with a fetch request via axios
  const [clients, setClients] = useState([
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
    { id: 6, name: 'Client 6' },
  ]);

  const handleAddClientBtnClick = () => {
    props.controlModal(true);
  };
  // const [clients, setClients] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://api.example.com/clients'
  //     );
  //     setClients(result.data);
  //   };
  //   fetchData();
  // }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
              <div key={client.id} className="client-list__client">
                {client.name}
              </div>
            ))}
        </div>
        <div className="client-list__add-client">
          <button onClick={handleAddClientBtnClick}>Add Client</button>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
