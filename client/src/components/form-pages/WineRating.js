import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

//cab, syrah, malbec, merlot, sangio, pinot, grenache, other, anything!
const WineRating = () => {
  return (
    <>
      <FormPage
        category="wineRating"
        options={[
          {
            optionText: "Who cares! Wine ratings are totes subjective.",
            optionValue: "any",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Okay, I have some standards..",
            optionValue: "above 2.5",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/france-map.png" />
            ),
          },
          {
            optionText: "I'm looking for something decent",
            optionValue: "above 3",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/spain-map.png" />
            ),
          },
          {
            optionText: "Gimme that community verified goodness",
            optionValue: "above 3.5",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "I want something next-level",
            optionValue: "above 4",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/france-map.png" />
            ),
          },
        ]}
        question={"Do you care about wine ratings?"}
        defaultOutput={"I want a wine rated"}
        canChooseMultiple={false}
        type="selections"
        // previous={null}
        // next='redirect'
      ></FormPage>
    </>
  );
};

{
  /* <a href="https://icons8.com/icon/45746/usa-map">USA Map icon by Icons8</a>
<a href="https://icons8.com/icon/58460/france-map">France Map icon by Icons8</a>
<a href="https://icons8.com/icon/58505/spain-map">Spain Map icon by Icons8</a> */
}

export default WineRating;
