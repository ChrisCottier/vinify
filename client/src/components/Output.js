import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextTransition, { presets } from "react-text-transition";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection

const Output = (props) => {
  const { form, selections } = useSelector((state) => state.forms);
  const { defaultOutput, type, category } = props;

  const [output, setOutput] = useState("");

  useEffect(() => {
    if (form === undefined || selections === undefined) return;
    if (type === "nav") {
      if (!form) {
        setOutput(`${defaultOutput}...`);
      } else {
        setOutput(`${defaultOutput} ${form}`);
      }
      return;
    }

    //not entering on update...
    if (type === "selections") {
      const chosen = selections[category];

      if (chosen.length === 0) {
        setOutput(`${defaultOutput}...`);
      } else {
        if (chosen.length === 1) {
          setOutput(`${defaultOutput} ${chosen[0]}.`);
        } else if (chosen.length === 2) {
          setOutput(`${defaultOutput} ${chosen[0]} or ${chosen[1]}.`);
        } else {
          setOutput(`${defaultOutput} ${multipleSelectionsOutput(chosen)}`);
        }
      }
    }
  }, [form, selections]);

  return (
    <div className="output-container">
      {/* <div className="output-text">{output}</div> */}
      <TextTransition
        text={output}
        springConfig={presets.molasses}
        id="output-text"
      ></TextTransition>
    </div>
  );
};

function multipleSelectionsOutput(chosen) {
  const chosenCopy = [...chosen];
  const first = chosenCopy.shift();
  const last = chosenCopy.pop();

  let middle = "";
  for (let selection of chosenCopy) {
    middle += `${selection}, `;
  }

  return `${first}, ${middle}or ${last}.`;
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
