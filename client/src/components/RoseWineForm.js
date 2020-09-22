import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NEW_FORM } from "../actions/forms";
import RoseWineNotes from "./form-pages/RoseWineNotes";

import SubmitSearch from "./SubmitSearch";

const RoseWineForm = () => {
  const dispatch = useDispatch();

  const { form, pageNum } = useSelector((state) => state.forms);

  useState(() => {
    if (form === undefined) return;
    if (form !== "rose") {
      dispatch({ type: NEW_FORM, formUrl: "rose" });
    }
  });

  return (
    <main>
      <div id="shadow"></div>
      <section style={{ display: pageNum === 1 ? "block" : "none" }}>
        <RoseWineNotes></RoseWineNotes>
      </section>
      <section style={{ display: pageNum === 2 ? "block" : "none" }}>
        <SubmitSearch></SubmitSearch>
      </section>
    </main>
  );
};

export default RoseWineForm;
