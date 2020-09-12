import React, {useState} from "react";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection

// *********NOW I am working on the border and state management when an option is clicked!

const Option = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { option, numOptions, num } = props;
  const { optionText,optionPic } = option;
  return (
    <div className={`option options-${numOptions} options-${numOptions}-num-${num}`}>
      <div className={`option-content option-content-${numOptions} ${isSelected ? 'option-selected' : 'option-unselected'}`}>
        <span className={`option-text title is-${numOptions}`}>{optionText}</span>
        <figure class="image is-96x96">
          {optionPic}
        </figure>
        
      </div>
    </div>
  );
};

export default Option;
