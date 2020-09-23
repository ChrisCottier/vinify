import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {} from "../actions/forms";
import FormPage from "./FormPage";
import WineColor from "./form-pages/WineColor";
import { NEW_FORM } from "../actions/forms";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
const WineColorForm = () => {
  const dispatch = useDispatch();
  const [formReset, setFormReset] = useState(false);

  // const { form } = useSelector((state) => state.forms);
  useEffect(() => {
    if (formReset) return;
    dispatch({ type: NEW_FORM, form: null });
    setFormReset(true);
  });

  return (
    <main>
      <div id="shadow"></div>
      <WineColor></WineColor>
    </main>
  );
};

export default WineColorForm;
