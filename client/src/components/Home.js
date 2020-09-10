import React from "react";
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Home = () => {
  const loggedOut = useSelector(state => state.auth);

  if (loggedOut === undefined) return null;
  if (!loggedOut) return <Redirect to="/form"></Redirect>
  return <main>HOME PAGE</main>;
};

export default Home;
