//importing structures
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage.jsx';
import LandingPage from './containers/LandingPage.jsx';
// import Navbar from './components'
//importing styling and images
import './stylesheets/styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
