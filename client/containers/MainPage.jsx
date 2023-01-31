import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideDisplay from '../containers/SideDisplay';
import ClientDisplay from './ClientDisplay';
import NavBar from '../components/Navbar';
import Modal from '../components/Modal';

import '../styles.scss';
//import AddTemplateBtn from './components/AddTemplateBtn.jsx';

//will have user_id here - which we will need for basically all the queries
const MainPage = () => {
  const [viewOneSession, setViewOneSession] = useState(false);
  const [showModal, setShowModal] = useState(true);
  //make a request for all of a user's clients - should be an array of client objects that we save to state here.
  return (
    <div className="mainpage">
      <NavBar />
      <div className="main-page-content">
        {/* need to pass the list of clients here*/}
        <SideDisplay viewState={viewOneSession} controlModal={setShowModal} />

        {/* need to pass user_id here */}
        <ClientDisplay
          viewState={viewOneSession}
          changeViewHandler={setViewOneSession}
        />
        {showModal && <Modal controlModal={setShowModal} />}
      </div>
    </div>
  );
};

export default MainPage;
