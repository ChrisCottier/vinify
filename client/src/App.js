import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "bulma/css/bulma.css";
import "./index.css";
import { hasAccessToken } from "./actions/auth";

import NavbarLoggedOut from "./components/NavbarLoggedOut";
import NavbarLoggedIn from "./components/NavbarLoggedIn"
// import UserList from "./components/UsersList";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  const dispatch = useDispatch();
  const {loggedOut } = useSelector(state => state.auth)

  useEffect(() => {
    if (!loggedOut) return;
    dispatch(hasAccessToken());
  });

  return (
    <BrowserRouter>
      {loggedOut ? <NavbarLoggedOut></NavbarLoggedOut> : <NavbarLoggedIn></NavbarLoggedIn>}
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/form" component={Form}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
