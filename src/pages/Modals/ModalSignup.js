import "../../styles/Modal/ModalSignup.scss";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function ModalSigup() {
  const navigate = useNavigate();
  return (
    <div className="modalBackground-sigup">
      <div className="modalContainer-sigup">
        <div className="modal-text-sigup">
          <p className="modal-text__tittle-sigup">Signed up successfully</p>
          <p>You have Signed in successfully</p>
          <FontAwesomeIcon className="check-icon-sigup" icon={faCheck} />
        </div>
        <button className="modalSignin__btn-sigup" onClick={() => navigate("/Sin")}>OK</button>
      </div>

    </div>
  )
}
export default ModalSigup