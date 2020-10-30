import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { SIGN_UP_MODAL, LOG_IN_MODAL } from "../actions/modals";
import {logIn} from '../actions/auth'

const NavbarLoggedOut = () => {
  const dispatch = useDispatch();
  // const [showLogin, setShowLogin] = useState(false)
  const menu = useRef(null)

  const showSignUp = () => dispatch({ type: SIGN_UP_MODAL, display: "block" });
  const showLogIn = () => dispatch({ type: LOG_IN_MODAL, display: "block" });

  const toggleBurger = (event) => {
    event.stopPropagation();
    event.target.classList.toggle('is-active');
    menu.current.classList.toggle('is-active')
  }

  const demoUser = (event) => {
    event.stopPropagation();
    dispatch(logIn({ email: "demo@gmail.com", password: "password" }));
  };

  return (
    <>
      <nav id="main-nav" className="navbar is-fixed-top is-transparent">
      <div className="navbar-brand">
          <NavLink to="/find" className="logo">
            <img id="vinify-logo" src="static/2vinify_logo_1356x745.png" />
          </NavLink>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" ref={menu}>
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a onClick={showSignUp}>Sign Up</a>
            </div>
            <div className="navbar-item">
              <a onClick={showLogIn}>Log In</a>
            </div>
            <div className="navbar-item">
              <a onClick={demoUser}>Demo Log In</a>
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
