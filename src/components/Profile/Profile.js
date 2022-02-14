import React, { useEffect, useState } from "react";
import app, { auth } from "../../db/firebase";
import "./Profile.css";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/firebase";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Redirect } from "react-router/cjs/react-router.min";

function Profile({ history }) {
  const [users, setUsers] = useState([]);

  const SwitchUser = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = () => {
    signOut(auth).then(()=>{
      history.push("/login")
    }).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
    async function getUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(
        querySnapshot.docs.map((doc) => ({
          uid: doc.id,
          user: doc.data(),
        }))
      );
    }
    getUsers();
  }, []);

  return (
    <div className="profile">
      <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
          className="logo_netflix_login"
        />
      <p className="title_profile">Who's Watching?</p>
      <div className="row_avatar_profile">
        {users.map((doc) => (
          <div className="avatar_profile">
            <img
              onClick={() => SwitchUser(doc.user)}
              src={doc.user.imageURL}
              alt="avatar"
            />
            <p>{doc.user.userName} </p>
          </div>
        ))}
        <div 
        onClick={() => logout()}
        >
        <AddCircleIcon
        sx={{ fontSize: 110 }} className="icon_profile" />
        </div>
      </div>
      <div className="manage_profile">
        <p>
          M A N A G E <span> P R O F I L E S</span>
        </p>
      </div>
      <div
      onClick={() => logout()}
      className="logout_profile">
        <p>
            L O G <span> O U T</span>
        </p>
      </div>
    </div>
  );
}

export default withRouter(Profile);
