import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router/cjs/react-router.min";
import db, { auth } from "../../db/firebase";
import { AuthContext } from "../Auth/AuthProvider";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const { currentUser } = useContext(AuthContext);

  const logout = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
    async function getUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.docs.map((doc) => {
          if (doc.data().uid == currentUser.uid) {
            setUser(doc.data())
          }
        })
    }
    getUsers();
  }, []);

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
        onClick={() => logout()}
        className="netflix_logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix"
      />
      <Link to={"/profile"}>
        <img
          // onClick={() => logout()}
          className="avatr_logo"
          src={user.imageURL || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
          alt="avatar"
        />
      </Link>
    </div>
  );
}

export default Nav;
