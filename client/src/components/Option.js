import React from "react";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const Option = (props) => {
  const { option } = props;
  const { optionText } = option;
  return (
    <div className="option-container">
      <div className="option">{optionText}</div>
    </div>
  );
};

export default Option;
