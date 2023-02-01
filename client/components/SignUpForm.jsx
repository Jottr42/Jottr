import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

// https://developers.google.com/identity/gsi/web/reference/js-reference
import '../stylesheets/SignUpForm.scss';

const SignUpForm = ({ showModal, setLogin, setSignup }) => {
  function handleCallbackResponse(response) {
    console.log(`Enconded JWT web token` + response.credential);
    const userObject = jwt_decode(response.credential);
    // setAuthUser(userObject)
    console.log(userObject);
    document.getElementById('signInDiv').hidden = true;
    const name = userObject.name;
    const password = userObject.sub;
    const email = userObject.email;

    console.log(`name, password, email`, name, password, email)

    createUser(name, email, password);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '58745667257-bitarihg68uolj7v4rovo3fb999nu7sr.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    }),
      google.accounts.id.renderButton(document.getElementById('signInDiv'), {
        theme: 'outline',
        size: 'large',
      });
  }, []);

  const navigate = useNavigate();

  const createUser = async (name, password, email) => {
    //create user
    try {
      const info = await axios.post('http://localhost:3000/user/create', {
        name,
        password,
        email,
      });
      if (info.data === 'User was successfully created') {
        //setLogin true
        setLogin(true);
        //setSignup false;
        setSignup(false);
        //send them to the login page
        showModal();
      }
      console.log(`info====`, info);
    } catch (error) {
      console.log(`Error in Signup Form`, error);
    }
  };

  const onSignUpSubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[2].value;
    const email = e.target[1].value;

    console.log(name);
    console.log(password);
    console.log(email);

    createUser(name, password, email);
  };

  return (
    <div className="form-card">
      <form onSubmit={onSignUpSubmitHandler}>
        <label htmlFor="fullName" className="form-label">
          Full Name:
          <input
            name="fullName"
            type="text"
            placeholder="Enter Full Name"
            className="form-input"
          />
        </label>
        <label htmlFor="email" className="form-label">
          Email Address:
          <input
            name="email"
            type="text"
            placeholder="valid@email.com"
            className="form-input"
          />
        </label>
        {/* <label htmlFor="username">
          Username:
          <input name="username" type="text" placeholder="Choose Username" />
        </label> */}
        <label htmlFor="password" className="form-label">
          Password:
          <input
            name="password"
            type="text"
            placeholder="Choose Password"
            className="form-input"
          />
        </label>
        <label htmlFor="confirmPass" className="form-label">
          Confirm Password:
          <input
            name="confirmPass"
            type="text"
            placeholder="Confirm Password"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-submit-btn">
          Register
        </button>
      </form>
      <h2>OR</h2>
      <div id="signInDiv"></div>
    </div>
  );
};

export default SignUpForm;
