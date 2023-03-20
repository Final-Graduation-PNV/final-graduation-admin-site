import "../../styles/Auth/Signup.scss";

import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { sendEmailOTP, signup } from '../../api/authAPI';
import logo from "../../assets/Image/logo.png";
import { setUserId } from "../../utils/localStorageUtils";
import ConfirmOTP from "../Modals/ConfirmOTP";
import ModalSigup from '../Modals/ModalSignup';

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowOTP, setIsShowOTP] = useState(false)

  const initialErrors = Object.freeze({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    address: "",
    city: ""
  })

  const [errors, setErrors] = useState(initialErrors);

  const handleSignup = async (e) => {
    resetErrors()
    e.preventDefault();
    try {
      const res = await signup(
        name,
        email,
        password,
        password_confirmation,
      );
      setUserId(res.data.user.id)
      setIsShowOTP(true)
    }
    catch (err) {
      setErrors(err.data.errors)
      console.log("Err sign in", err.data.errors)
    }
  }

  const resetErrors = () => {
    setErrors(initialErrors)
  }


  return (

    <div id="container">
      {isShowOTP && <ConfirmOTP  closeModal={setIsShowOTP}  email = {email} />}
      {isModalOpen && <ModalSigup closeModal={setIsModalOpen} />}
      <div className="signup">
        <div className="signup__left">
          <div className="signup__left--logo">
            <img src={logo} alt="" style={{ width: 100, height: 200 }} />
          </div>
          <div className="signup__left--text">
            <p className="signup__left--text-tittle">
              Welcome to Plant &amp; Flower
            </p>
            <p className="signup__left--text-desc">
              Please to meet you! Wish you have health and success
            </p>
          </div>
        </div>
        <div className="signup__right">
          <form action="" className='signup__right--form' >
            <p className='signup__right--title'>Sign Up</p>
            <input type="text" className="name" name="Name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.name}</div>}
            <input type="text" className="email" name="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.email}</div>}
            <input type="password" className="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <div style={{ color: "rgb(173, 3, 3)", textAlign: "center" }}>{errors.password}</div>}
            <input type="password" className="confirmPassword" name="confirmPassword" placeholder='Cofirm Password' value={password_confirmation} onChange={(e) => { setConfirmPassword(e.target.value) }} />
            {errors.password_confirmation && <div style={{ color: "rgb(173, 3, 3)" }}>{errors.password_confirmation}</div>}
            <input type="submit" className="submit" value="Sign up" onClick={handleSignup} />
          </form>
          <div className='signup__right--icon'>
            <div className='faFacebookF'><FontAwesomeIcon icon={faFacebookF} className='faFacebookF_icon' /><p>Facebook</p></div>
            <div className="faGoogle"><FontAwesomeIcon icon={faGoogle} className='faGoogle_icon' /><p>Google</p></div>
            <div className="faTwitter"><FontAwesomeIcon icon={faTwitter} className='faTwitter_icon' /><p>Twitter</p></div>
          </div>
          <p className='no__account'>Don't you have an? <Link to="/sign-in">Sign in</Link> now</p>
        </div>
      </div>

    </div>
  )
}
export default Signup
