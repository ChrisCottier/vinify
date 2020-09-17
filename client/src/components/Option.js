import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SET_FORM, SET_SELECTION } from "../actions/forms";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection

// *********NOW I am working on the border and state management when an option is clicked!

const Option = (props) => {
  const dispatch = useDispatch();
  const { form, selections } = useSelector((state) => state.forms);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selections === null) return;
  }, [selections]);

  if (!form === undefined || !selections === undefined) {
    return null;
  }

  const { option, numOptions, num, canChooseMultiple, type, category } = props;
  const { optionText, optionPic, optionValue } = option;

  const toggleSelection = (event) => {
    event.stopPropagation();
    const value = event.currentTarget.getAttribute("data-value");

    if (type === "nav") {
      if (!form) {
        setIsSelected(true);
        dispatch({ type: SET_FORM, value });
        return;
      } else if (form && form === value) {
        setIsSelected(false);
        dispatch({ type: SET_FORM, value: "" });
      }
      return;
    }

    if (type === "selections") {
      if (isSelected) {
        setIsSelected(false);
        dispatch({ type: SET_SELECTION, value, category });
      } else {
        if (!canChooseMultiple && selections[category].length > 0) {
          return;
        }
        setIsSelected(true);
        dispatch({ type: SET_SELECTION, value, category });
      }
    }
  };
  //

  return (
    <div
      className={`option options-${numOptions} options-${numOptions}-num-${num}`}
    >
      <div
        data-value={optionValue}
        className={`option-content option-content-${numOptions} ${
          isSelected ? "option-selected" : "option-unselected"
        }`}
        onClick={toggleSelection}
      >
        <span className={`option-text title is-${numOptions}`}>
          {optionText}
        </span>
        <figure className="image is-96x96">{optionPic}</figure>
      </div>
    </div>
  );
};

export default Option;

// /const Option = (props) => {
//   const dispatch = useDispatch();
//   const {form, selections} = useSelector(state => state.forms)

//   const [isSelected, setIsSelected] = useState(false);

//   useEffect(() => {
//     if (selections === null) return
//   }, [selections])

//     if (!form === undefined || !selections === undefined) {
//       return null;
//     }

//   const { option, numOptions, num, canChooseMultiple, type, category} = props;
//   const { optionText, optionPic, optionValue } = option;

//   const toggleSelection = (event) => {
//     event.stopPropagation();
//     const value = event.currentTarget.getAttribute('data-value')

//     if (type === 'nav') {
//       if (!form) {
//         setIsSelected(true)
//         dispatch({type: SET_FORM, value})
//         return;
//       } else if(form && form === value) {
//         setIsSelected(false)
//         dispatch({type: SET_FORM, value: ''})
//       }
//       return;
//     }

//     if (type === 'selections') {
//       let newSelections = selections[category];
//       if (isSelected) {
//         setIsSelected(false);
//         const valueIndex = newSelections.indexOf(value)
//         newSelections.splice(valueIndex, 1)
//         dispatch({type: SET_SELECTION, value: newSelections, category})
//       } else {
//         if (!canChooseMultiple && newSelections.length > 0) {
//           return;
//         }
//         setIsSelected(true);
//         newSelections = [...newSelections, value]
//         console.log('fsdafsdfaf',value, newSelections, selections)
//         dispatch({type: SET_SELECTION, value: newSelections, category})
//       }
//     }

//   }
//   //

//   return (
//     <div className={`option options-${numOptions} options-${numOptions}-num-${num}`}>
//       <div data-value={optionValue} className={`option-content option-content-${numOptions} ${isSelected ? 'option-selected' : 'option-unselected'}`} onClick={toggleSelection}>
//         <span className={`option-text title is-${numOptions}`}>{optionText}</span>
//         <figure class="image is-96x96">
//           {optionPic}
//         </figure>

//       </div>
//     </div>
//   );
// };

// export default Option;
