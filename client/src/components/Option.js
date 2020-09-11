import React from "react";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection
const Option = (props) => {
  const { option, numOptions, num } = props;
  const { optionText } = option;
  return (
    <div className={`option options-${numOptions} options-${numOptions}-num-${num}`}>
      <div className="option-content">
        <span className={`option-text title is-${numOptions}`}>{optionText}</span>
        <figure class="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        
      </div>
    </div>
  );
};

export default Option;
