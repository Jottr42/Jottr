import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setUser, user }) => {
  const navigate = useNavigate();
  const onLoginSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email, password);

    try {
      const info = await axios.post('http://localhost:3000/user/verify', {
        password,
        email,
      });
      console.log(info.data);
      if (info.data.verified === true) {
        setUser({ userID: info.data.user_id, password: info.data.email });
        navigate('/main');
      }
      console.log(`info====`, info);
    } catch (error) {
      console.log(`Error in login Form`, error);
    }
  };

  return (
    <div className="formCard">
      <form onSubmit={onLoginSubmitHandler}>
        <label htmlFor="email">
          Email:
          <input name="email" type="text" placeholder="Email"></input>
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
