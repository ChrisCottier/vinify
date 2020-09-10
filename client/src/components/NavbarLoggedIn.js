import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { LOG_OUT, ACCESS_TOKEN } from "../actions/auth";

const NavbarLoggedIn = () => {
  const dispatch = useDispatch();
  const {loggedOut} = useSelector(state => state.auth)

  const logOut = () => {
      
    document.cookie= `${ACCESS_TOKEN}= ;`;
    dispatch({ type: LOG_OUT })
};

  if (loggedOut) return <Redirect to="/"></Redirect>
  return (
    <>
      <nav id="main-nav" className="navbar is-fixed-top is-transparent">
        <NavLink to="/form" className="logo navbar-brand">
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
              <a onClick={logOut}>Log Out</a>
            </div>
          </div>
        </div>
      </nav>
    </>

    // TODO OTHER DIV THAT HASTHE SEARCH BAR THAT REPLACES THE NAVBAR
  );
};

export default NavbarLoggedIn;