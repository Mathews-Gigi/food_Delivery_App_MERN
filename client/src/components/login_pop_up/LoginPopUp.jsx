import React, { useState } from "react";
import classes from "./LoginPopUp.module.css";
import { assets } from "../../assets/frontend_assets/assets";

function LoginPopUp({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <div className={classes.login_popup}>
      <form className={classes.login_container}>
        <div className={classes.login_popup_title}>
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="state"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className={classes.login_popup_inputs}>
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your name" required />
          )}
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className={classes.login_popup_condition}>
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
