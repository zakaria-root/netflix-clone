import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../db/firebase";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth,setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
    value={ {currentUser} }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
