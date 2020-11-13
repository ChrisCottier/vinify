import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { LOG_OUT, ACCESS_TOKEN } from "../actions/auth";

const NavbarLoggedIn = () => {
  const dispatch = useDispatch();
  const { matches } = useSelector((state) => state.wines);

  const menu = useRef(null)

  const logOut = () => {
    document.cookie = `${ACCESS_TOKEN}= ;`;
    dispatch({ type: LOG_OUT });
  };

  const toggleBurger = (event) => {
    event.stopPropagation();
    event.target.classList.toggle('is-active');
    menu.current.classList.toggle('is-active')
  }

  return (
    <>
      <nav id="main-nav" className="navbar is-fixed-top is-transparent">
        <div className="navbar-brand">
          <NavLink to="/find" className="logo">
            <img id="vinify-logo" src="static/2vinify_logo_1356x745.png" />
          </NavLink>
          <a role="button" className="navbar-burger" id="burger-menu" aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu" ref={menu}>
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item ">
              <NavLink className="" to="/find">
                Find wine
              </NavLink>
            </div>
            {matches ? (
              <div className="navbar-item">
                <NavLink to="/matches">Matches</NavLink>
              </div>
            ) : (
              <></>
            )}

            <div className="navbar-item">
              <NavLink to="/favorites">Favorites</NavLink>
            </div>
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
