import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../actions/auth";
import {logIn} from '../actions/auth'


import { SIGN_UP_MODAL, LOG_IN_MODAL } from "../actions/modals";

const Home = () => {
  const dispatch = useDispatch();
  const { loggedOut } = useSelector((state) => state.auth);

  const text = useRef(null);
  // const [showGlassesAnimation, setShowGlassesAnimation] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  let n = 1;

  useEffect(() => {
    if (!text) return;

    let newText = "";
    let animationDelay = 6;

    for (let i = 0; i < text.current.innerText.length; i++) {
      newText +=
        '<span class="char">' +
        (text.current.innerText[i] == " "
          ? "&nbsp;"
          : text.current.innerText[i]) +
        "</span>";
    }

    text.current.innerHTML = newText;
    text.current.style.display = "block";
    for (let i = 0; i < text.current.children.length; i++) {
      text.current.children[i].style["animation-delay"] =
        animationDelay * i + "ms";
    }
  }, [currentFrame, text]);

  useEffect(() => {
    if (!text || currentFrame > 1) return;

    const changeFrame = setInterval(() => {
      if (n < 4) {
        let next = currentFrame + n;
        setCurrentFrame(next);
        n++;
      }
    }, 4000);

    return () => clearInterval(changeFrame);
  }, [text]);

  const showSignUp = () => dispatch({ type: SIGN_UP_MODAL, display: "block" });
  const showLogIn = () => dispatch({ type: LOG_IN_MODAL, display: "block" });

  const demoUser = (event) => {
    event.stopPropagation();
    dispatch(logIn({ email: "demo@gmail.com", password: "password" }));
  };

  if (loggedOut === false) return <Redirect to="/find"></Redirect>;

  return (
    <main className="splash-background">
      <video autoPlay muted id="splash-video">
        <source
          src="https://misc0103.s3.us-east-2.amazonaws.com/glasses-video-short.mp4"
          type="video/mp4"
        ></source>
      </video>

      <div id="home-page-container">
        {currentFrame === 1 ? (
          <span
            ref={text}
            className="home-text-display"
            style={{ display: "none" }}
          >
            Welcome to Vinify
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 2 ? (
          <span
            ref={text}
            className="home-text-display"
            style={{ display: "none" }}
          >
            We've got an easier way to find wine
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 3 ? (
          <span
            ref={text}
            className="home-text-display"
            style={{ display: "none" }}
          >
            All you need to do is answer a few questions
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 4 ? (
          <>
            <span
              ref={text}
              className="home-text-display"
              style={{ display: "none" }}
            >
              Try it out!
            </span>

            <img
              id="sign-up-logo"
              src="/static/logo-large.png"
              onClick={showSignUp}
            />
            <div id="auth-buttons">
              <button className="button accent-color background" onClick={showSignUp}>Sign Up</button>
              <button className="button accent-color background" onClick={showLogIn}>Log In</button>
              <button className="button accent-color background" onClick={demoUser}>Demo Log In</button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default Home;
