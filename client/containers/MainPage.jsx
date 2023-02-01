import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideDisplay from '../containers/SideDisplay';
import ClientDisplay from './ClientDisplay';
import NavBar from '../components/Navbar';
import Modal from '../components/Modal';
import axios from 'axios';

import '../styles.scss';
//import AddTemplateBtn from './components/AddTemplateBtn.jsx';

//will have user_id here - which we will need for basically all the queries
const MainPage = ({ user, setUser }) => {
  const [viewOneSession, setViewOneSession] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //make a request for all of a user's clients - should be an array of client objects that we save to state here.
  const [clients, setClients] = useState([]);
  const [currentClient, setCurrentClient] = useState({});
  const [currentClientSessions, setCurrentClientSessions] = useState([]);

  console.log(currentClient, 'currentClient');

  //getting all of a users clients
  useEffect(() => {
    const { userID } = user;

    console.log(`USERID  ============`, userID);
    axios({
      method: 'GET',
      url: `http://localhost:3000/client/allClients/${userID}`,
    })
      .then((response) => {
        // console.log(response.data);
        setClients(response.data);
      })
      .catch((err) => {
        console.log(`Error in useEffect getClients`, err);
      });
  }, []);

  // getting all of a selected clients sessions

  useEffect(() => {
    if (!currentClient.client_id) return;
    axios({
      method: 'GET',
      url: `http://localhost:3000/record/allRecords/${currentClient.client_id}`,
    })
      .then((response) => {
        console.log(response.data);
        setCurrentClientSessions(response.data);
      })
      .catch((err) => {
        console.log(`Error in useEffect getting all client records`, err);
      });
  }, [currentClient]);

  return (
    <div className="mainpage">
      <NavBar />
      <div className="main-page-content">
        {/* need to pass the list of clients here*/}
        <SideDisplay
          viewState={viewOneSession}
          controlModal={setShowModal}
          user={user}
          setClients={setClients}
          clients={clients}
          setCurrentClient={setCurrentClient}
          currentClient={currentClient}
          currentClientSessions={currentClientSessions}
        />

        {/* need to pass user_id here */}
        <ClientDisplay
          viewState={viewOneSession}
          changeViewHandler={setViewOneSession}
          currentClient={currentClient}
          currentClientSessions={currentClientSessions}
        />
        {showModal && (
          <Modal
            controlModal={setShowModal}
            user={user}
            setClients={setClients}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
