import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NEW_FORM } from "../actions/forms";
import FormPage from "./FormPage";
import WineCountryOrigin from "./form-pages/WineCountryOrigin";
import WinePrice from "./form-pages/WinePrice";
import RedWineVerital from "./form-pages/RedWineVerietal";
import WineRating from "./form-pages/WineRating";
import RedWineNotes from "./form-pages/RedWineNotes";
import SubmitSearch from "./SubmitSearch";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
const RedWineForm = () => {
  const dispatch = useDispatch();

  const { form, pageNum } = useSelector((state) => state.forms);

  useState(() => {
    if (form === undefined) return;
    if (form !== "red") {
      dispatch({ type: NEW_FORM, formUrl: "red" });
    }
  });

  return (
    <main>
      <section style={{ display: pageNum === 1 ? "block" : "none" }}>
        <WineCountryOrigin></WineCountryOrigin>
      </section>
      <section style={{ display: pageNum === 2 ? "block" : "none" }}>
        <WinePrice></WinePrice>
      </section>
      <section style={{ display: pageNum === 3 ? "block" : "none" }}>
        <RedWineVerital></RedWineVerital>
      </section>
      <section style={{ display: pageNum === 4 ? "block" : "none" }}>
        <WineRating></WineRating>
      </section>
      <section style={{ display: pageNum === 5 ? "block" : "none" }}>
        <RedWineNotes></RedWineNotes>
      </section>
      <section style={{ display: pageNum === 6 ? "block" : "none" }}>
        <SubmitSearch></SubmitSearch>
      </section>
    </main>
  );
};

export default RedWineForm;
