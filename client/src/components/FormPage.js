import React, { useState } from "react";

import Question from "./Question";
import OptionsContainer from "./OptionsContainer";
import Output from "./Output";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const FormPage = (props) => {
  // const [redirect, setRedirect] = useState(false);
  const { form } = useSelector(state => state.forms)
  const { 
    // selections, 
    // setSelections,
    type,
    options, 
    question, 
    defaultOutput, 
    canChooseMultiple,
    previous,
    // next,
    // page,
    // setPage
   } = props;

  //  const progress = () => {
  //   if (next === 'redirect') {
  //     setRedirect(true)
  //   }
  //  }




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
        // selections={selections}
        // setSelections={setSelections}
        ></OptionsContainer>
      </div>
      <div id="output-container" className="">
        <Output 
        defaultOutput={defaultOutput} 
        canChooseMultiple={canChooseMultiple}
        type={type}
        // selections={selections}
        // setSelections={setSelections}
        ></Output>
      </div>
      <div id="form-navigation-container">
        {previous ? <button className="button"></button> : <span></span>}
        {type === 'nav' && form ? <NavLink to={`/${form}`}>Next</NavLink>: <span></span>}
        {/* {next ? <button className="button">Next</button> : <span></span>} */}
      </div>
    </div>
  );
};

export default FormPage;
