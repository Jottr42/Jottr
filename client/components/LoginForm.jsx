import React, {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/LoginForm.scss';
import jwt_decode from 'jwt-decode'

const LoginForm = ({ setUser, user }) => {
  const navigate = useNavigate();


  function handleCallbackResponse(response) {
    console.log(`Enconded JWT web token` + response.credential);
    const userObject = jwt_decode(response.credential);
    // setAuthUser(userObject)
    console.log(userObject);
    document.getElementById('signInDiv').hidden = true;
    const password = userObject.sub;
    const email = userObject.email;

    console.log(`name, password, email`, name, password, email)

    login(email, password);
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

  //to be used for google auth login
  const login = async (password, email) => {
    
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
  }


  const onLoginSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    console.log(email, password);
    login(password, email)
    
  };

  return (
    <div className="formCard">
      <form onSubmit={onLoginSubmitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input name="email" type="text" placeholder="Email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input name="password" type="text" placeholder="Password"></input>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <h2>OR</h2>
      <div id="signInDiv"></div>
    </div>
  );
};

export default LoginForm;
