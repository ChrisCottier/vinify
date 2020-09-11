import React from "react";
import Option from './Option'

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const OptionsContainer = (props) => {
  const { options } = props;
  const numOptions = options.length;
  return (
    <div id="options-container">
        <div className={`options-grid-${numOptions}`}>
            {options.map((option, index) => {
                return <Option option={option} numOptions={numOptions} num={index + 1}></Option>
            })}
        </div>
    </div>
  );
};

export default OptionsContainer;