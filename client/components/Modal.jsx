import React from 'react';
import axios from 'axios';
import '../stylesheets/Modal.scss';

const Modal = ({ user, controlModal, setClients }) => {
  const handleCloseModalClick = () => {
    controlModal(false);
  };

  //need to make the client POST request

  const createClient = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    try {
      const info = await axios.post(`http://localhost:3000/client`, {
        name,
        email,
        user_id: user.userID,
      });

      const result = await axios.get(
        `http://localhost:3000/client/allClients/${user.userID}`
      );

      console.log(`allclients=======`, result.data);
      setClients(result.data);
      controlModal(false);
    } catch (error) {
      console.log(`Error in Signup Form`, error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h4 className="modal-title">Add Client</h4>
        </div>
        <div className="modal-body">
          <form className="modal-form" onSubmit={createClient}>
            <label htmlFor="name">
              Name:
              <input type="text" name="name" />
            </label>
            <label htmlFor="name">
              Email:
              <input type="text" name="email" />
            </label>
            <button type="submit" className="submitBtn">Add Client</button>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={handleCloseModalClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
