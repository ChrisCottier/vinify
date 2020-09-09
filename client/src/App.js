import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "bulma/css/bulma.css";
import "./index.css";
import { hasAccessToken } from "./actions/auth";

import Navbar from "./components/Navbar";
// import UserList from "./components/UsersList";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hasAccessToken());
  });

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
