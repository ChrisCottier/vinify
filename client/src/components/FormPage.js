import React from "react";

import Question from "./Question";
import OptionsContainer from "./OptionsContainer";
import Output from "./Output";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const FormPage = (props) => {
  const { 
    options, 
    question, 
    defaultOutput, 
    canChooseMultiple, 
    selections, 
    setSelections } = props;
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
        ></Output>
      </div>
    </div>
  );
};

export default FormPage;
