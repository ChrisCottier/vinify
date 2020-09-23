import React, { useState } from "react";

import { CHANGE_PAGE } from "../actions/forms";
import Question from "./Question";
import OptionsContainer from "./OptionsContainer";
import Output from "./Output";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const FormPage = (props) => {
  const dispatch = useDispatch();
  // const [redirect, setRedirect] = useState(false);
  const { form, selections, pageNum } = useSelector((state) => state.forms);
  const {
    type,
    category,
    options,
    question,
    defaultOutput,
    canChooseMultiple,
    previous,
    notesAndOption,
  } = props;

  const changePage = (event) => {
    event.stopPropagation();
    const classes = event.target.classList;
    if (classes.contains("previous-page")) {
      dispatch({ type: CHANGE_PAGE, value: pageNum - 1 });
    } else if (classes.contains("next-page")) {
      dispatch({ type: CHANGE_PAGE, value: pageNum + 1 });
    }
  };

  return (
    <div className="container is-widescreen form-container">
      <div id="question-container" className="">
        <Question question={question}></Question>
      </div>
      <div id="options-container" className="">
        <OptionsContainer
          options={options}
          canChooseMultiple={canChooseMultiple}
          type={type}
          category={category}
        ></OptionsContainer>
      </div>
      <div id="output-container" className="">
        <Output
          defaultOutput={defaultOutput}
          canChooseMultiple={canChooseMultiple}
          type={type}
          category={category}
          notesAndOption={notesAndOption}
        ></Output>
      </div>
      <div id="form-navigation-container">
        {type === "nav" && form ? (
          <>
            <span></span>
            <NavLink className="button wine-color background" to={`/${form}`}>
              Next
            </NavLink>
          </>
        ) : (
          <></>
        )}

        {type === "nav" && !form ? (
          <>
            <span></span>
            <span></span>
          </>
        ) : (
          <></>
        )}

        {type === "selections" && pageNum > 1 ? (
          <button
            className="button previous-page wine-color background"
            onClick={changePage}
          >
            Previous
          </button>
        ) : (
          <></>
        )}
        {type === "selections" && selections[category].length > 0 ? (
          <button
            className="button next-page wine-color background"
            onClick={changePage}
          >
            Next
          </button>
        ) : (
          <></>
        )}
        {/* {next ? <button className="button">Next</button> : <span></span>} */}
      </div>
    </div>
  );
};

export default FormPage;
