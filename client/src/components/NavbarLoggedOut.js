import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { SIGN_UP_MODAL, LOG_IN_MODAL } from "../actions/modals";

const NavbarLoggedOut = () => {
  const dispatch = useDispatch();
  // const [showLogin, setShowLogin] = useState(false)

  const showSignUp = () => dispatch({ type: SIGN_UP_MODAL, display: "block" });
  const showLogIn = () => dispatch({ type: LOG_IN_MODAL, display: "block" });
  return (
    <>
      <nav id="main-nav" className="navbar is-fixed-top is-transparent">
        <NavLink to="/" className="logo navbar-brand">
          {"wine".toUpperCase()}
        </NavLink>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item ">
              <a>hi</a>
            </div>
            <div className="navbar-item">
              <a>sample</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a onClick={showSignUp}>Sign Up</a>
            </div>
            <div className="navbar-item">
              <a onClick={showLogIn}>Log In</a>
            </div>
          </div>
        </div>
      </nav>
      <LogIn></LogIn>
      <SignUp></SignUp>
    </>

    // TODO OTHER DIV THAT HASTHE SEARCH BAR THAT REPLACES THE NAVBAR
  );
};

export default NavbarLoggedOut;
