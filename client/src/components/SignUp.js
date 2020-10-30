import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SimpleInput } from "./sub-components/Form-Inputs";
import { SIGN_UP_MODAL } from "../actions/modals";
import { signUp } from "../actions/auth";

//FAICON {tag, type, size}

const SignUp = () => {
  const dispatch = useDispatch();
  const { signUpDisplay } = useSelector((state) => state.modals);
  const { errors } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "name") {
      setName(event.target.value);
    } else if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "password") {
      setPassword(event.target.value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(signUp({ name, email, password, confirmPassword }));
  };

  const modalOff = () => {
    dispatch({ type: SIGN_UP_MODAL, display: "none" });
  };

  if (!signUpDisplay || !errors) return null;
  return (
    <div
      id="sign-up-modal"
      className="modal"
      style={{ display: signUpDisplay }}
    >
      <div className="modal-background" onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Sign Up</p>
        </header>
        <section className="modal-card-body">
          <ul>
            {errors.map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <SimpleInput
                type="text"
                label="Name"
                placeHolder="What's your name?"
                value={name}
                handleChange={handleChange}
                require={true}
                name="name"
                FAIconLeft="fas fa-user"
              ></SimpleInput>
              <SimpleInput
                type="email"
                label="Email"
                placeHolder="What's your email address?"
                value={email}
                handleChange={handleChange}
                require={true}
                name="email"
                FAIconLeft="fas fa-envelope"
              ></SimpleInput>
              <SimpleInput
                type="password"
                label="Password"
                placeHolder="Choose A Password"
                value={password}
                handleChange={handleChange}
                require={true}
                name="password"
                FAIconLeft="fas fa-lock"
              ></SimpleInput>
              <SimpleInput
                type="password"
                label="Confirm Password"
                placeHolder="Please confirm your password"
                value={confirmPassword}
                handleChange={handleChange}
                require={true}
                name="confirmPassword"
                FAIconLeft="fas fa-lock"
              ></SimpleInput>
            </div>
            <div className="field">
              <div className="control sign-up-button">
                <button className="button wine-color background" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
