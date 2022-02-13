import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "./AuthProvider";

function PrivetRoute({ component: ComponentRouter, ...rest }) {
const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => 
        currentUser ? (<ComponentRouter {...routeProps} /> ) : (<Redirect to={"/login"} />)
      }
    />
  );
}

export default PrivetRoute;
