import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const onSignUpSubmitHandler = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const username = e.target[2].value;
    const password = e.target[3].value;
    const email = e.target[4].value;

    console.log(firstName, lastName);
    console.log(username, password);
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={onSignUpSubmitHandler}>
        <label htmlFor="firstName">
          First Name:
          <input name="firstName" type="text" placeholder="Enter First Name" />
        </label>
        <label htmlFor="firstName">
          Last Name:
          <input name="lastName" type="text" placeholder="Enter Last Name" />
        </label>
        <label htmlFor="email">
          Email Address:
          <input name="email" type="text" placeholder="valid@email.com" />
        </label>
        <label htmlFor="username">
          Username:
          <input name="username" type="text" placeholder="Choose Username" />
        </label>
        <label htmlFor="password">
          Password:
          <input name="password" type="text" placeholder="Choose Password" />
        </label>
        <label htmlFor="confirmPass">
          Confirm Password:
          <input
            name="confirmPass"
            type="text"
            placeholder="Confirm Password"
          />
        </label>
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default SignUpForm;
