import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.css";

function Modal({ handleClose }) {
  return (
    <div className="modal__layout" onClick={handleClose}>
      <div className="modal__container">
        <AiFillCloseCircle className="modal__close-btn" onClick={handleClose} />
        <p>Employee Created</p>
      </div>
    </div>
  );
}

export default Modal;
