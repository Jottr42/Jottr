import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/SignUpForm.scss';

const SignUpForm = ({ showModal, setLogin, setSignup }) => {
  const navigate = useNavigate();
  const onSignUpSubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[2].value;
    const email = e.target[1].value;

    console.log(name);
    console.log(password);
    console.log(email);

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

  return (
    <div className="form-card">
      <form onSubmit={onSignUpSubmitHandler}>
        <label htmlFor="fullName" className="form-label">
          Full Name:
          <input name="fullName" type="text" placeholder="Enter Full Name" className="form-input"/>
        </label>
        <label htmlFor="email" className="form-label">
          Email Address:
          <input name="email" type="text" placeholder="valid@email.com" className="form-input"/>
        </label>
        {/* <label htmlFor="username">
          Username:
          <input name="username" type="text" placeholder="Choose Username" />
        </label> */}
        <label htmlFor="password" className="form-label">
          Password:
          <input name="password" type="text" placeholder="Choose Password" className="form-input"/>
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
        <button type="submit" className="form-submit-btn">Register</button>
      </form>
    </div>
  );
};

export default SignUpForm;
