import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const LandingPage = ({ user, setUser }) => {
  //usestate for showing modals set to false
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  //create buttons to either log in or sign up

  //function that will show one modal or another
  const showModal = (str) => {
    if (login === true && signup === true) {
      setLogin(false);
      setSignup(false);
    } else if (login === true) {
      if (signup) setSignup(false);
      return (
        <LoginForm
          user={user}
          setUser={setUser}
          setSignup={setSignup}
          setLogin={setLogin}
        />
      );
    } else if (signup === true) {
      if (login) setLogin(false);
      return (
        <SignUpForm
          showModal={showModal}
          setSignup={setSignup}
          setLogin={setLogin}
        />
      );
    }
  };

  return (
    <div data-testid='landing'>
      <h1>Hello to Jottr</h1>
      <button
        onClick={() => {
          setLogin(true);
          showModal();
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          setSignup(true);
          showModal();
        }}
      >
        Signup
      </button>
      {showModal()}
    </div>
  );
};

export default LandingPage;
