import React, { useState } from "react";

import FormPage from "./FormPage";
import WineColor from "./form-pages/WineColor";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
const Form = () => {
  const [wineColors, setWineColors] = useState([]);
  return (
    <main>
      <WineColor></WineColor>
    </main>
  );
};

export default Form;