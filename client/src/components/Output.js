import React from "react";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const Output = (props) => {
  const { defaultOutput } = props;
  return (
    <div className="output-container">
      <div className="">{defaultOutput}</div>
    </div>
  );
};

export default Output;
