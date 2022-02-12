import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="dark_background">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
          className="logo_netflix_login"
        />
        <div className="singnin_section">
          <h1 className="signin_top_section">Sign In</h1>
          <div className="signin_input_section">
            <input
              className="signin_input"
              type="email"
              placeholder="Email or phone number"
            />
            <input
              className="signin_input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="signin_button_section">
            <button className="signin_buton">Sign In</button>
          </div>
          <div className="signin_bottom_section">
            <div className="fackbook_login">
              <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
              alt="facbook"
            />
            <p>Login with facboock</p>
            </div>
            <p>Now To Netflix? <span className="signup">Sign up New </span></p>
            <p>This page is protected by Google roCAPTCHA to ensure you're not bot. <a href="#"> Learn more</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;