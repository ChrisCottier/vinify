import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Footer = () => {
  const { loggedOut } = useSelector((state) => state.auth);
  if (loggedOut) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <footer className="footer custom-footer">
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
