import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
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
    for (let i = 0; i < text.current.children.length; i++) {
      text.current.children[i].style["animation-delay"] =
        animationDelay * i + "ms";
    }
  }, [currentFrame, text]);

  useEffect(() => {
    if (!text || currentFrame > 1) return;
    const changeFrame = setInterval(() => {
      console.log("use ef frame", currentFrame);
      if (n < 3) {
        let next = currentFrame + n;
        // console.log(next, "next");
        setCurrentFrame(next);
        n++;
        // currentFrame++;
      }
    }, 5000);

    return changeFrame;
  }, [text]);

  if (loggedOut === undefined) return null;
  if (loggedOut === false) return <Redirect to="/choose-wine-color"></Redirect>;

  console.log("frame", currentFrame);
  return (
    <main>
      <div id="home-page-container">
        {currentFrame === 1 ? (
          <span ref={text} className="home-text-display">
            Welcome to Vinify
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 2 ? (
          <span ref={text} className="home-text-display">
            We've got an easier way to find wine
          </span>
        ) : (
          <></>
        )}
        {currentFrame === 3 ? (
          <span ref={text} className="home-text-display">
            All you need to do is answer a few questions
          </span>
        ) : (
          <></>
        )}
        {/* <span className="home-text-display">
          We've got an easier way to find wine
        </span> */}
      </div>
      HOME PAGE
    </main>
  );
};

export default Home;
