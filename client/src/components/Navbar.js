import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { SignUp } from "./SignUp";

const Navbar = () => {
  // const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <nav id="main-nav" className="navbar is-fixed-top is-transparent">
        <NavLink to="/" className="logo navbar-brand">
          {"wine".toUpperCase()}
        </NavLink>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item ">
              {/* <NavLink to="/about">About</NavLink> */}
              {/* <a onClick={()=> footerRef.current.scrollIntoView({ behavior: 'smooth' })}>About</a> */}
            </div>
            <div className="navbar-item">{/* <SearchBar></SearchBar> */}</div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <NavLink to="/create-campaign" className="start-campaign">
                Start A Campaign
              </NavLink>
            </div>
            {authLinks}
          </div>
        </div>
      </nav>
      {/* <Login></Login> */}
      <SignUp></SignUp>
    </>

    // TODO OTHER DIV THAT HASTHE SEARCH BAR THAT REPLACES THE NAVBAR
  );
};

export default Navbar;
