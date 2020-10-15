import React from "react";

import { CHANGE_PAGE } from "../actions/forms";
import Question from "./Question";
import OptionsContainer from "./OptionsContainer";
import Output from "./Output";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection

const FormNavigation = (props) => {
  const dispatch = useDispatch();
  const { form, selections, pageNum } = useSelector((state) => state.forms);

  const {
    type,
    category
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

  //the code before the return controls how the nav buttons are rendered
  //and where they go to

  let navNext = <></>;
  let selectionsPrevious = <></>;
  let selectionsNext = <></>;

  if (type === "nav" && form) {
    navNext = (<>
    <span></span>
    <NavLink className="form-nav clickable" to={`/${form}`}>
      {'Next >'}
    </NavLink>
  </>)
  }

  if (type === "selections") {

    if (pageNum > 1) {
      selectionsPrevious = (
        <div
        className="previous-page form-nav clickable"
        onClick={changePage}
      >
        {'< Previous'}
      </div>
      )
    } else {
      selectionsPrevious = <div></div>
    }
    if (selections[category].length > 0) {
      selectionsNext = (
        <div
        className="next-page form-nav clickable"
        onClick={changePage}
      >
        {'Next >'}
      </div>
      )
    } else {
      selectionsNext = <div></div>
    }

  }




  return (
    <div id="form-navigation-container">
        {navNext}
        {selectionsPrevious}
        {selectionsNext}
      </div>
  )
}

const FormPage = (props) => {

  const {
    type,
    category,
    options,
    question,
    defaultOutput,
    canChooseMultiple,
    notesAndOption,
  } = props;

  

  return (
    <div className="container is-widescreen form-container">
      <div id="question-container" className="">
        <Question question={question}></Question>
      </div>
      {/* <div id="options-container" className=""> */}
        <OptionsContainer
          options={options}
          canChooseMultiple={canChooseMultiple}
          type={type}
          category={category}
        ></OptionsContainer>
      {/* </div> */}
      <FormNavigation type={type} category={category}></FormNavigation>
      <div id="output-container" className="">
        <Output
          defaultOutput={defaultOutput}
          canChooseMultiple={canChooseMultiple}
          type={type}
          category={category}
          notesAndOption={notesAndOption}
        ></Output>
      </div>
    </div>
  );
};

export default FormPage;
