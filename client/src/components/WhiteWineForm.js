import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NEW_FORM } from "../actions/forms";
import WineCountryOrigin from "./form-pages/WineCountryOrigin";
import WinePrice from "./form-pages/WinePrice";
import SubmitSearch from "./SubmitSearch";
import WhiteWineVerietal from "./form-pages/WhiteWineVerietal";
import WhiteWineNotes from "./form-pages/WhiteWineNotes";
import WineBubbles from "./form-pages/WineBubbles";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
const WhiteWineForm = () => {
  const dispatch = useDispatch();

  const { form, pageNum } = useSelector((state) => state.forms);

  useState(() => {
    if (form === undefined) return;
    if (form !== "white") {
      dispatch({ type: NEW_FORM, formUrl: "white" });
    }
  });

  return (
    <main>
      <section style={{ display: pageNum === 1 ? "block" : "none" }}>
        <WineBubbles></WineBubbles>
      </section>
      <section style={{ display: pageNum === 2 ? "block" : "none" }}>
        <WineCountryOrigin></WineCountryOrigin>
      </section>
      <section style={{ display: pageNum === 3 ? "block" : "none" }}>
        <WinePrice></WinePrice>
      </section>
      <section style={{ display: pageNum === 4 ? "block" : "none" }}>
        <WhiteWineVerietal></WhiteWineVerietal>
      </section>
      <section style={{ display: pageNum === 5 ? "block" : "none" }}>
        <WhiteWineNotes></WhiteWineNotes>
      </section>
      <section style={{ display: pageNum === 6 ? "block" : "none" }}>
        <SubmitSearch></SubmitSearch>
      </section>
    </main>
  );
};

export default WhiteWineForm;
