import React from "react";

import FormPage from "../FormPage";

const WineColor = () => {
  return (
    <>
      <div>wine color</div>
      <FormPage
        options={[
          { optionText: "Red" },
          { optionText: "White" },
          { optionText: "Rose" },
        ]}
        question={"What color wine are you interested in?"}
        defaultOutput={"I'm looking for.."}
      ></FormPage>
    </>
  );
};

export default WineColor;
