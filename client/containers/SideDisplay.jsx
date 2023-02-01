import React from 'react';
import SessionsList from '../components/SessionsList';
import ClientList from '../components/ClientList';
import '../stylesheets/Navbar.scss';

const SideDisplay = (props) => {
  return (
    <div>
      {!props.viewState && <ClientList controlModal={props.controlModal} />}
      {props.viewState && <SessionsList />}
    </div>
  );
};

export default SideDisplay;
