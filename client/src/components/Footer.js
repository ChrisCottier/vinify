import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { FOOTER_DISPLAY } from "../actions/modals";
import { wineDetails } from "../actions/wines";

const Footer = () => {
  const dispatch = useDispatch();
  const { loggedOut } = useSelector((state) => state.auth);
  const { footerDisplay } = useSelector((state) => state.modals);

  useEffect(() => {
    if (footerDisplay === "none" && window.location.pathname !== "/matches") {
      dispatch({ type: FOOTER_DISPLAY, display: "block" });
    }
  }, [window.location.pathname]);

  if (loggedOut && window.location.pathname !== "/") {
    return <Redirect to="/"></Redirect>;
  }

  if (!footerDisplay) return null;
  return (
    <footer
      id="custom-footer"
      // className="footer"
      style={{ display: footerDisplay }}
    >
      <div className="container">
        <div className="columns footer-columns">
          <div id="footer-credits" className="column is-two-fifths">
            <span>This site was individually created by Chris Cottier.</span>
            <span>Logo and animations by Lena Rush.</span>
            <span>
              Wine data sourced from <a href="http://www.snooth.com/" rel="noopener noreferrer" target="_blank">Snooth</a>
              .
            </span>
            <span>
              Wine store data sourced from{" "}
              <a href="https://www.winefetch.com/wine-search/" rel="noopener noreferrer" target="_blank">Wine Fetch</a>.
            </span>
            <span>
              Icons courtesy of <a href="https://icons8.com/" rel="noopener noreferrer" target="_blank">Icons8</a>.
            </span>
          </div>
          {/* LINKS INCOMPLETE */}
          <div className="column is-one-fifth personal-links">
            <a href="https://github.com/ChrisCottier" className="title" rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
            <a href="https://github.com/ChrisCottier" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github fa-5x"></i>
            </a>
          </div>
          <div className="column is-one-fifth personal-links">
            <a
              href="https://www.linkedin.com/in/christopher-cottier-92587194/"
              className="title"
              rel="noopener noreferrer" target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/christopher-cottier-92587194/" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin fa-5x"></i>
            </a>
          </div>
          <div className="column is-one-fifth personal-links">
            <a href="https://angel.co/u/christopher-cottier" rel="noopener noreferrer" target="_blank" className="title">
              AngelList
            </a>
            <a href="https://angel.co/u/christopher-cottier" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-angellist fa-5x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
