import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "bulma/css/bulma.css";
import "./index.css";
import "./components/styles/navbar.css";
import "./components/styles/form.css";
import "./components/styles/question.css";
import "./components/styles/options.css";
import "./components/styles/matches.css";
import "./components/styles/output.css";
import "./components/styles/wine-page.css";
import "./components/styles/follows.css";
import "./components/styles/home.css";
import "./components/styles/modals.css";
import "./components/styles/footer.css";

import { hasAccessToken } from "./actions/auth";

import NavbarLoggedOut from "./components/NavbarLoggedOut";
import NavbarLoggedIn from "./components/NavbarLoggedIn";
// import UserList from "./components/UsersList";
import Home from "./components/Home";
import WineColorForm from "./components/WineColorForm";
import RedWineForm from "./components/RedWineForm";
import WhiteWineForm from "./components/WhiteWineForm";
import Matches from "./components/Matches";
import Footer from "./components/Footer";
import WinePage from "./components/WinePage";
import Following from "./components/Following";
import RoseWineForm from "./components/RoseWineForm";
import FindWineForm from "./components/FindWineForm";
import WinePairingForm from "./components/WinePairingForm";
import Random from "./components/Random";

//forms
//white, red, rose
//cooking, personality, random

function App() {
  const dispatch = useDispatch();
  const { loggedOut } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loggedOut) return;
    dispatch(hasAccessToken());
  });

  return (
    <BrowserRouter>
      {loggedOut ? (
        <NavbarLoggedOut></NavbarLoggedOut>
      ) : (
        <NavbarLoggedIn></NavbarLoggedIn>
      )}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/find" component={FindWineForm}></Route>
        <Route path="/pairing" component={WinePairingForm}></Route>
        <Route path="/color" component={WineColorForm}></Route>
        <Route path="/red" component={RedWineForm}></Route>
        <Route path="/white" component={WhiteWineForm}></Route>
        <Route path="/rose" component={RoseWineForm}></Route>
        <Route path="/matches" component={Matches}></Route>
        <Route path="/wines/:id" component={WinePage}></Route>
        <Route path="/favorites" component={Following}></Route>
        <Route path="/random" component={Random}></Route>
      </Switch>
      <Footer component={Footer}></Footer>
    </BrowserRouter>
  );
}

export default App;
