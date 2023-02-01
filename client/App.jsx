//importing structures
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage.jsx';
import LandingPage from './containers/LandingPage.jsx';
import jwt_decode from 'jwt-decode'

//importing styling and images
import './styles.scss';

const App = () => {
  const [user, setUser] = useState({});
  // const [authUser, setAuthUser] = useState({});

  function handleCallbackResponse(response) {
console.log(`Enconded JWT web token` + response.credential);
const userObject = jwt_decode(response.credential);
// setAuthUser(userObject)
console.log(userObject)
document.getElementById("signInDiv").hidden = true;
  }
  useEffect(()=> {
    /* global google */
    google.accounts.id.initialize({
      client_id:"58745667257-bitarihg68uolj7v4rovo3fb999nu7sr.apps.googleusercontent.com",
      callback: handleCallbackResponse
    }),
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline", size:"large"} )
  },
  [])

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
      <div id="signInDiv"></div>
      {/* {authUser && <div>
        <img src={user.picture} /></div>} */}
    </div>
  );
};

export default App;
