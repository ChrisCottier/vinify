import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Footer = () => {
  const { loggedOut } = useSelector((state) => state.auth);
  if (loggedOut) {
    return <Redirect to="/"></Redirect>;
  }

  return <div>footer</div>;
};

export default Footer;
