import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const LandingPage = () => {
  return (
    <div>
      <h1>Hello from Landing Page</h1>
      <LoginForm />
      <LoginForm />
      <div>
        <p>----------</p>
        <p>----------</p>
        <p>----------</p>
        <p>----------</p>
      </div>

      <SignUpForm />
    </div>
  );
};

export default LandingPage;
