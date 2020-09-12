import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
//GRID your formpage for sure, for pixel perfection

const Output = (props) => {
  const { form } = useSelector(state => state.forms) 
  const { defaultOutput, type} = props;

  const [output, setOutput] = useState('')

  useEffect(() => {
    console.log('change output')
    if (type === 'nav') {
      if (!form) {
        setOutput(`${defaultOutput}...`)
      } else {
        setOutput(`${defaultOutput} ${form}`)
      }
    }
    
    // if (selections.length === 0) {
    //   setOutput(`${defaultOutput}...`)
    // } else {
    //   if (selections.length === 1) {
    //     setOutput(`${defaultOutput} ${selections[0]}.`)
    //   } else if (selections.length === 2) {
    //     setOutput(`${defaultOutput} ${selections[0]} or ${selections[1]}.`)
    //   } else {
    //     setOutput(`${defaultOutput} ${multipleSelectionsOutput(selections)}`)
    //   }
    // }

  }, [form])

  return (
    <div className="output-container">
      <div className="">{output}</div>
    </div>
  );
};


function multipleSelectionsOutput(selections) {
  const selectionsCopy = selections;
  const first = selectionsCopy.shift();
  const last = selectionsCopy.pop();
  
  let middle =''
  for (let selection of selectionsCopy) {
    middle += `${selection}, `
  }
  
  return `${first}, ${middle}or ${last}.`
}
export default Output;

        // const Output = (props) => {
        //   const { defaultOutput, selections, se} = props;
        
        //   const [output, setOutput] = useState('')
        
        //   console.log('output component', selections)
        //   useEffect(() => {
        //     console.log('change output')
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