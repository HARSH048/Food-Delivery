import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

function LoginPopup({ setLogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "SignUp" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to the terms of use & Privacy Policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account?<span onClick={()=>setCurrState('Sign Up')}>Click Here</span>
          </p>
        ) : (
          <p>
            Aready have a new Account?<span onClick={()=>setCurrState('Login')}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
