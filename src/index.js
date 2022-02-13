import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./components/Auth/AuthProvider";
import PrivetRoute from "./components/Auth/PrivetRoute";
import Register from "./components/Register/Register";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivetRoute path="/" exact component={Home} />
    </BrowserRouter>
    </AuthProvider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
