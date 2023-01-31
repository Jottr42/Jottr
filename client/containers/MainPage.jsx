import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideDisplay from '../containers/SideDisplay';
import ClientDisplay from './ClientDisplay';
import NavBar from '../components/Navbar';
import Modal from '../components/Modal';

import '../styles.scss';
//import AddTemplateBtn from './components/AddTemplateBtn.jsx';

const MainPage = () => {
  const [viewOneSession, setViewOneSession] = useState(false);
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="mainpage">
      <NavBar />
      <div className="main-page-content">
        <SideDisplay viewState={viewOneSession} controlModal={setShowModal} />

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
