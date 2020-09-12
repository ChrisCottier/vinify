import React from "react";

import FormPage from "../FormPage";

const WineColor = (props) => {

  const {selections, setSelections} = props;
  return (
    <>
      <div>wine color</div>
      <FormPage
        options={[
          { optionText: "Red", optionValue: 'red', optionPic: <img src="https://img.icons8.com/color/96/000000/wine-glass.png"/> },
          { optionText: "White", optionValue: 'white', optionPic: <img src="https://img.icons8.com/color/96/000000/white-wine.png"/> },
          { optionText: "Rose", optionValue: 'rose', optionPic: <img src="https://img.icons8.com/officel/80/000000/wine-glass.png"/> },
        ]}
        question={"What color wine are you interested in?"}
        defaultOutput={"I'm looking for.."}
        canChooseMultiple={false}
        selections={selections}
        setSelections={setSelections}
      ></FormPage>
    </>
  );
};

{/* <a href="https://icons8.com/icon/12885/wine-glass">Wine Glass icon by Icons8</a> */}
{/* <a href="https://icons8.com/icon/42610/white-wine">White Wine icon by Icons8</a> */}
{/* <a href="https://icons8.com/icon/FAlabT_0LWCt/wine-glass">Wine Glass icon by Icons8</a> */}

export default WineColor;
