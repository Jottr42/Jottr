import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Navbar.scss';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    console.log('logout');
    navigate('/');
  };
  return (
    <nav>
      <div className="button-container">
        <button className="nav-button">Add Template</button>
        <button className="nav-button">Account Info</button>
        <button className="nav-button" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
      <div className="banner">Jottr</div>
    </nav>
  );
};

export default NavBar;
