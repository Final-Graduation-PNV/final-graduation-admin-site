import "../../styles/Modal/ModalHPage.scss";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-icon">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="modal-text">
          <p className="modal-text__tittle">Check your Email address</p>
          <p className="modal-text__desc">Please confirm that you want to this as your Email address</p>
          <button className="btn__checkEmail" onClick={() => closeModal(false)}><Link className="checkEmail" to="/Sin">Check your email</Link></button>
        </div>
      </div>
    </div>
  )
}
export default Modal