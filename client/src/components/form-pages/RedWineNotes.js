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
        category="notes"
        options={[
          {
            optionText: "Earthy",
            optionValue: "earth",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Oaky",
            optionValue: "oak",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Red berries, fruits",
            optionValue: "bright fruit",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Dark berries, fruits",
            optionValue: "dark fruit",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Herbs",
            optionValue: "herbs",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Spices",
            optionValue: "spices",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Chocolate",
            optionValue: "chocolate",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "I'm open to whatever",
            optionValue: "any",
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
