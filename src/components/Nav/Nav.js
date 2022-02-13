import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router/cjs/react-router.min";
import { auth } from "../../db/firebase";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const logout = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={show ? "Nav_show" : "Nav"}>
        <img
          className="netflix_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
        />
        <Link to={"/profile"}>
              <img
        // onClick={() => logout()}
        className="avatr_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
        </Link>

    </div>
  );
}

export default Nav;
