import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

//earth
//oak
//cherry bright fruit
//dark fruit
//herbs
//acidity
//spices
//coffee chocolate

const RedWineNotes = () => {
  return (
    <>
      <FormPage
        category="wineNotes"
        options={[
          {
            optionText: "Earthy",
            optionValue: "earth",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
        ]}
        question={"What kind of flavor profile sounds good?"}
        defaultOutput={"When I think tasty, I think"}
        canChooseMultiple={true}
        type="selections"
        // previous={null}
        // next='redirect'
      ></FormPage>
    </>
  );
};

export default RedWineNotes;
