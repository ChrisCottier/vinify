import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../actions/auth";

import { SIGN_UP_MODAL } from "../actions/modals";

const Home = () => {
  const dispatch = useDispatch();
  const { loggedOut } = useSelector((state) => state.auth);

  const text = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  let n = 1;
  // let currentFrame = 1;

  // let text;
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
    console.log("after check");
    // debugger;
    const changeFrame = setInterval(() => {
      // console.log("what");
      if (n < 7) {
        let next = currentFrame + n;
        console.log(next);
        setCurrentFrame(next);
        n++;
        // currentFrame++;
      }
    }, 4000);
    // debugger;
    return clearInterval(changeFrame);
  }, [text]);

  const signUp = () => {
    dispatch({ type: SIGN_UP_MODAL, display: "block" });
  };

  // if (loggedOut === undefined) return null;
  if (loggedOut === false) return <Redirect to="/choose-wine-color"></Redirect>;

  return (
    <main>
      <div id="home-page-container">
        <video autoPlay muted id="splash-video">
          <source src="static/splash-video.mp4" type="video/mp4"></source>
        </video>
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
          <span
            ref={text}
            className="home-text-display"
            style={{ display: "none" }}
          >
            Whether you've got a social-distanced dinner party...
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 5 ? (
          <span
            ref={text}
            className="home-text-display"
            style={{ display: "none" }}
          >
            Or you're just looking to treat yourself...
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 6 ? (
          <span
            ref={text}
            className="home-text-display"
            style={{ display: "none" }}
          >
            We can find a wine for you
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 7 ? (
          <>
            <span
              ref={text}
              className="home-text-display"
              style={{ display: "none" }}
            >
              Try it out!
            </span>
            <button className="button is-large" onClick={signUp}>
              Sign Up
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default Home;
