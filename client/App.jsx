//importing structures
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage.jsx';
import LandingPage from './containers/LandingPage.jsx';

//importing styling and images
import './styles.scss';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LandingPage user={user} setUser={setUser} />}
        />
        <Route
          path="/main"
          element={<MainPage user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
};

export default App;
