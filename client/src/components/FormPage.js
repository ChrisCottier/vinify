import React, { useState } from "react";

import Question from "./Question";
import OptionsContainer from "./OptionsContainer";
import Output from "./Output";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const FormPage = (props) => {
  const [redirect, setRedirect] = useState(false);

  const { 
    selections, 
    setSelections,
    options, 
    question, 
    defaultOutput, 
    canChooseMultiple,
    previous,
    next,
    page,
    setPage
   } = props;

   const progress = () => {
    if (next === 'redirect') {
      setRedirect(true)
    }
   }

   console.log('form page', selections)


  return (
    <div className="container is-widescreen form-container">
      <div id="question-container" className="">
        <Question question={question}></Question>
      </div>
      <div id="options-container" className="">
        <OptionsContainer 
        options={options} 
        canChooseMultiple={canChooseMultiple}
        selections={selections}
        setSelections={setSelections}
        ></OptionsContainer>
      </div>
      <div id="output-container" className="">
        <Output 
        defaultOutput={defaultOutput} 
        selections={selections}
        canChooseMultiple={canChooseMultiple}
        setSelections={setSelections}
        ></Output>
      </div>
      <div id="form-navigation-container">
        {previous ? <button className="button"></button> : <span></span>}
        {next && selections.length > 0 ? <button className="button">Next</button> : <span></span>}
      </div>
    </div>
  );
};

export default FormPage;
