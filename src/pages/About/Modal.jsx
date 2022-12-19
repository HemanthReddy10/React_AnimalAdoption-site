import React from "react";
import "./Modal.css";

function Modal({ setOpenModal ,callBack}) {
  return (
    <div className="modal-Background">
      <div className="modal-Container">
        <div className="title-CloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Let Them Know Someone Cares!! Thank you for being good</h1>
        </div>
        <div className="body">
          <p>You will be redirected to a form . After you fill it we will contact you asap!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => callBack("form")}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;