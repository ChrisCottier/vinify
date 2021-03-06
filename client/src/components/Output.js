import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextTransition, { presets } from "react-text-transition";

import { TOGGLE_NOTES_AND_OR } from "../actions/forms";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection

const Output = (props) => {
  const dispatch = useDispatch();
  const { form, selections } = useSelector((state) => state.forms);
  const { notesAreAnd } = useSelector((state) => state.forms.selections);
  const { defaultOutput, type, category, notesAndOption } = props;

  const [output, setOutput] = useState("");
  const [andSelected, setAndSelected] = useState(false);

  useEffect(() => {
    if (
      form === undefined ||
      selections === undefined ||
      notesAreAnd === undefined
    )
      return;
    if (type === "nav") {
      if (!form) {
        setOutput(`${defaultOutput}...`);
      } else {
        setOutput(`${defaultOutput} ${form}`);
      }
      return;
    }

    if (type === "selections") {
      const chosen = selections[category];

      if (chosen.length === 0) {
        setOutput(`${defaultOutput}...`);
      } else {
        if (chosen.length === 1) {
          setOutput(`${defaultOutput} ${chosen[0]}.`);
        } else if (chosen.length === 2) {
          setOutput(
            `${defaultOutput} ${chosen[0]} ${notesAreAnd ? "and" : "or"} ${
              chosen[1]
            }.`
          );
        } else {
          setOutput(
            `${defaultOutput} ${multipleSelectionsOutput(chosen, notesAreAnd)}`
          );
        }
      }
    }
  }, [form, selections, notesAndOption]);

  const toggleAndSelected = () => {
    if (!andSelected) {
      setAndSelected(true);
      dispatch({ type: TOGGLE_NOTES_AND_OR, value: true });
    } else {
      setAndSelected(false);
      dispatch({ type: TOGGLE_NOTES_AND_OR, value: false });
    }
  };

  return (
    <>
      {/* <div className="output-text">{output}</div> */}
      <TextTransition
        text={output}
        springConfig={presets.molasses}
        id="output-text"
      ></TextTransition>
      {notesAndOption ? (
        <a
          id="toggle-and-option"
          className={andSelected ? "option-selected" : "option-unselected"}
          onClick={toggleAndSelected}
        >
          AND
        </a>
      ) : (
        <></>
      )}
    </>
  );
};

function multipleSelectionsOutput(chosen, notesAreAnd) {
  const chosenCopy = [...chosen];
  const first = chosenCopy.shift();
  const last = chosenCopy.pop();

  let middle = "";
  for (let selection of chosenCopy) {
    middle += `${selection}, `;
  }

  return `${first}, ${middle}${notesAreAnd ? "and" : "or"} ${last}.`;
}
export default Output;

// const Output = (props) => {
//   const { defaultOutput, selections, se} = props;

//   const [output, setOutput] = useState('')

//   useEffect(() => {
//     if (selections.length === 0) {
//       setOutput(`${defaultOutput}...`)
//     } else {
//       if (selections.length === 1) {
//         setOutput(`${defaultOutput} ${selections[0]}.`)
//       } else if (selections.length === 2) {
//         setOutput(`${defaultOutput} ${selections[0]} or ${selections[1]}.`)
//       } else {
//         setOutput(`${defaultOutput} ${multipleSelectionsOutput(selections)}`)
//       }
//     }

//   }, [selections])

//   return (
//     <div className="output-container">
//       <div className="">{output}</div>
//     </div>
//   );
// };
