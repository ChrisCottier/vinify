import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FindWine from "./form-pages/FindWine";
import { NEW_FORM } from "../actions/forms";
import { WINE_RESET } from "../actions/wines";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
const FindWineForm = () => {
  const dispatch = useDispatch();
  const [storeReset, setStoreReset] = useState(false);

  useEffect(() => {
    if (storeReset) return;
    dispatch({ type: NEW_FORM, form: null });
    dispatch({ type: WINE_RESET });
    setStoreReset(true);
  });

  return (
    <main>
      <div id="shadow"></div>
      <FindWine></FindWine>
    </main>
  );
};

export default FindWineForm;
