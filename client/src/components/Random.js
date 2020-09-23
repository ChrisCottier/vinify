import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import Loading from "./Loading";
import { NEW_FORM } from "../actions/forms";

const Random = () => {
  const dispatch = useDispatch();

  const [resetForm, setResetForm] = useState(false);
  useEffect(() => {
    if (resetForm) return;
    dispatch({ type: NEW_FORM, formUrl: null });
    setResetForm(true);
  });

  // if (!gotRandom || !wine) return <Loading></Loading>;
  const randomId = Math.floor(Math.random() * 81580);
  return <Redirect to={`/wines/${randomId}`}></Redirect>;
};

export default Random;
