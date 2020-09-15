import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
  const { loggedOut } = useSelector((state) => state.auth);
  if (loggedOut === undefined) return null;
  if (loggedOut === false) return <Redirect to="/choose-wine-color"></Redirect>;
  return <main>HOME PAGE</main>;
};

export default Home;
