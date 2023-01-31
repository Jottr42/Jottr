import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClientList from '../components/ClientList';
import ClientDisplay from './ClientDisplay';
import NavBar from '../components/Navbar';

import '../stylesheets/styles.scss';
//import AddTemplateBtn from './components/AddTemplateBtn.jsx';

const MainPage = () => {
  return (
    <div className="mainpage">
      <NavBar />
      <div className="main-page-content">
        <ClientList />
        {/* clientList */}
        <ClientDisplay />
      </div>
    </div>
  );
};

export default MainPage;
