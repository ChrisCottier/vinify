import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CHANGE_PAGE } from "../actions/forms";
import Question from "./Question";
import { SEARCH_WINES, searchWines } from "../actions/wines";
import { NavLink } from "react-router-dom";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const SubmitSearch = (props) => {
  const dispatch = useDispatch();
  const { form, selections, pageNum } = useSelector((state) => state.forms);

  const changePage = (event) => {
    event.stopPropagation();
    const classes = event.target.classList;
    if (classes.contains("previous-page")) {
      dispatch({ type: CHANGE_PAGE, value: pageNum - 1 });
    }
  };

  const submitSelections = () => {
    dispatch(searchWines({ form, selections }));
  };

  return (
    <div className="container is-widescreen form-container">
      <div id="question-container" className="">
        <Question question={"Submit Search?"}></Question>
      </div>
      <div id="submit-search-container" className="">
        <NavLink
          to="/matches"
          className="button is-large background wine-color"
          onClick={submitSelections}
        >
          Submit Search
        </NavLink>
      </div>
      <div id="form-navigation-container">
        <button className="button previous-page" onClick={changePage}>
          Previous
        </button>
        <span></span>
        {/* {next ? <button className="button">Next</button> : <span></span>} */}
      </div>
    </div>
  );
};

export default SubmitSearch;
