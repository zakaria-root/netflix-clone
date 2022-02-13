import React, { useCallback, useContext, useState } from "react";
import "./Register.css";
import { auth } from "../../db/firebase";
import { provider } from "../../db/firebase";
import { withRouter, Redirect } from "react-router";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register({ history }) {
  const [showOverview, setShowOverview] = useState(false);

  const handleFacbookRegister = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, pass, confirmPass } = event.target.elements;
      if (pass.value != confirmPass.value) {
        alert("!! Error of typing....");
      } else {
        createUserWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            console.log("hihi" + userCredential);
            history.push("/login")
          })
          .catch((error) => {
            alert(error.message)
          });
      }
    },
    [history]
  );

  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <div className="Register">
        <div className="dark_background">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix"
            className="logo_netflix_Register"
          />

          <div className="singnin_section">
            <form onSubmit={handleFacbookRegister}>
              <h1 className="signin_top_section">Sign Up</h1>
              <div className="signin_input_section">
                <input
                  className="signin_input"
                  type="email"
                  name="email"
                  placeholder="Email or phone number"
                />
                <input
                  className="signin_input"
                  type="password"
                  placeholder="Password"
                  name="pass"
                />
                <input
                  className="signin_input"
                  type="password"
                  placeholder="Confirmed Password"
                  name="confirmPass"
                />
              </div>
              <div className="signin_button_section">
                <button type="submit" className="signin_buton">
                  Sign Up
                </button>
              </div>

              <div className="signin_bottom_section">
                <p>
                  Now To Netflix? <span className="signup">Sign in New </span>
                </p>
                <p>
                  This page is protected by Google roCAPTCHA to ensure you're
                  not bot.{" "}
                  <a onClick={() => setShowOverview(!showOverview)} href="#">
                    {" "}
                    Learn more
                  </a>{" "}
                </p>
                <p className={!showOverview ? "hidden_overview" : "overview"}>
                  The information collected by Google reCAPTCHA is subject to
                  the Google Privacy Policy and Terms of Service, and is used
                  for providing, maintaining, and improving the reCAPTCHA
                  service and for general security purposes (it is not used for
                  personalized advertising by Google).
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Register);
