import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase";

function Header() {
  const headerStyle = "navbar-brand";

  const [state, setState] = useState({ isLogged: false });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setState({ isLogged: true });
      } else {
        setState({ isLogged: false });
      }
    });
  }, [state]);

  const logOut = () =>
    firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));

  return (
    <>
      <nav
        className="navbar-light sticky-top"
        style={{
          backgroundColor: "#e3f2fd",
        }}
      >
        {state.isLogged && (
          <NavLink className={headerStyle} to="/">
            Top US News
          </NavLink>
        )}{" "}
        {state.isLogged && (
          <NavLink className={headerStyle} to="/appleNews">
            {" "}
            Apple News{" "}
          </NavLink>
        )}{" "}
        {state.isLogged && (
          <NavLink className={headerStyle} to="/wallStreetJournal">
            {" "}
            Wall Street Journal News{" "}
          </NavLink>
        )}{" "}
        {state.isLogged && (
          <NavLink className={headerStyle} to="/theGuardian">
            {" "}
            The Guardian News{" "}
          </NavLink>
        )}{" "}
        {state.isLogged && (
          <NavLink className={headerStyle} to="/climateChange">
            {" "}
            Climate Change News{" "}
          </NavLink>
        )}{" "}
        {!state.isLogged && (
          <NavLink className={headerStyle} to="/login">
            {" "}
            Login{" "}
          </NavLink>
        )}{" "}
        {!state.isLogged && (
          <NavLink className={headerStyle} to="/register">
            {" "}
            Register{" "}
          </NavLink>
        )}{" "}
        {state.isLogged && (
          <div
            style={{
              float: "right",
            }}
          >
            <NavLink
              className={headerStyle}
              onClick={() => {
                logOut();
              }}
              to="/"
            >
              Logout{" "}
            </NavLink>{" "}
          </div>
        )}{" "}
        {state.isLogged && (
          <div
            style={{
              float: "right",
            }}
          >
            <NavLink className={headerStyle} to="/accountInfo">
              Profile{" "}
            </NavLink>{" "}
          </div>
        )}{" "}
      </nav>{" "}
    </>
  );
}

export default Header;
