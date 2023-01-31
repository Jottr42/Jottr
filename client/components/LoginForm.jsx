import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    console.log(username, password);
  };

  return (
    <div className="formCard">
      <form onSubmit={onLoginSubmitHandler}>
        <label htmlFor="username">
          Username:
          <input name="username" type="text" placeholder="Username"></input>
        </label>
        <label htmlFor="password">
          Password:
          <input name="password" type="text" placeholder="Password"></input>
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
