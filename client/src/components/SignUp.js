import React from "react";

import { TextInput } from "./sub-components/Form-Inputs";

//FAICON {tag, type, size}

const SignUp = () => {
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
    } else if (name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {};

  const modalOff = () => {};

  return (
    <div className="modal" style={{ display: "none" }}>
      <div className="modal-background" onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Sign Up</p>
        </header>
        <section className="modal-card-body">
          <div>Sign up to continue.</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <TextInput
                label="Name"
                placeHolder="What's your name?"
                value={name}
                handleChange={handleChange}
                require={true}
                name="name"
                FAIconLeft={<i className="fas fa-user"></i>}
              ></TextInput>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
