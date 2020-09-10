import React from "react";

import Question from "./Question";
import Option from "./Option";
import Output from "./Output";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const FormPage = (props) => {
  const { state, setState, options, question, defaultOutput } = props;
  return (
    <div className="container is-widescreen form-container">
      <div id="question-container" className="">
        <Question question={question}></Question>
      </div>
      <div id="options-container" className="">
        {options.map((option) => {
          return <Option option={option} setState={setState}></Option>;
        })}
      </div>
      <div id="output-container" className="">
        <Output defaultOutput={defaultOutput} state={state}></Output>
      </div>
    </div>
  );
};

export default FormPage;
