import React from 'react';

const Modal = (props) => {
  const handleCloseModalClick = () => {
    props.controlModal(false);
  };

  //need to make the client POST request

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h4 className="modal-title">Add Client</h4>
        </div>
        <div className="modal-body">
          <form className="modal-form">
            <label htmlFor="name">
              Name:
              <input type="text" name="name" />
            </label>
            <label htmlFor="name">
              Email:
              <input type="text" name="email" />
            </label>
            <label htmlFor="name">
              Phone:
              <input type="text" name="phone" />
            </label>
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
