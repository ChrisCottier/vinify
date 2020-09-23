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
  if (loggedOut) {
    return <Redirect to="/"></Redirect>;
  }

  if (!footerDisplay) return null;
  return (
    <footer className="footer custom-footer" style={{ display: footerDisplay }}>
      <div className="container">
        <div className="columns footer-columns">
          <div className="column is-two-fifths">
            <div>This site was individually created by Chris Cottier</div>
            <div>See my profiles to the right!</div>
          </div>
          {/* LINKS INCOMPLETE */}
          <div className="column is-one-fifth personal-links">
            <a href="https://google.com" className="title">
              GitHub
            </a>
            <a href="https://google.com">
              <i className="fab fa-github fa-9x"></i>
            </a>
          </div>
          <div className="column is-one-fifth personal-links">
            <a href="https://google.com" className="title">
              LinkedIn
            </a>
            <a href="https://google.com">
              <i className="fab fa-linkedin fa-9x"></i>
            </a>
          </div>
          <div className="column is-one-fifth personal-links">
            <a href="https://google.com" className="title">
              AngelList
            </a>
            <a href="https://google.com">
              <i className="fab fa-angellist fa-9x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
