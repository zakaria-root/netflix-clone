import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../../db/firebase";
import { provider } from "../../db/firebase";
import { withRouter, Redirect } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Auth/AuthProvider";

function Login({ history }) {
  const [showOverview, setShowOverview] = useState(false);  

  const handleEmailAndPasswordLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, pass } = event.target.elements;

        signInWithEmailAndPassword(auth, email.value, pass.value)
          .then((userCredential) => {
            history.push("/")
          })
          .catch((error) => {
            alert(error.message)
          });
    },
    [history]
  );

  const handleFacbookLogin = useCallback(async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [history]);

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to={"/"} />
  }

  return (
    <div className="login">
      <div className="dark_background">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
          className="logo_netflix_login"
        />
        <div className="singnin_section">
          <form onSubmit={handleEmailAndPasswordLogin}>
            <h1 className="signin_top_section">Sign In</h1>
            <div className="signin_input_section">
              <input
                className="signin_input"
                type="email"
                placeholder="Email or phone number"
                name="email"
              />
              <input
                className="signin_input"
                type="password"
                placeholder="Password"
                name="pass"
              />
            </div>

            <div className="signin_button_section">
              <button type="submit" className="signin_buton">Sign In</button>
            </div>
            <div className="signin_bottom_section">
              <div className="fackbook_login">
                <img
                  onClick={() => handleFacbookLogin()}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
                  alt="facbook"
                />
                <p>Login with facboock</p>
              </div>
              <p>
                Now To Netflix?
                <Link className="signup" to="/register">
                  <span>Sign up Now </span>
                </Link>
              </p>
              <p>
                This page is protected by Google roCAPTCHA to ensure you're not
                bot.{" "}
                <a onClick={() => setShowOverview(!showOverview)} href="#">
                  {" "}
                  Learn more
                </a>{" "}
              </p>
              <p className={!showOverview ? "hidden_overview" : "overview"}>
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login);
