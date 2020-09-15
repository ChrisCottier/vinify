import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const WineCountryOrigin = () => {
  return (
    <>
      <FormPage
        category="country"
        options={[
          {
            optionText: "United States",
            optionValue: "USA",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "France",
            optionValue: "France",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/france-map.png" />
            ),
          },
          {
            optionText: "Spain",
            optionValue: "Spain",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/spain-map.png" />
            ),
          },
          {
            optionText: "Canada",
            optionValue: "Canada",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/spain-map.png" />
            ),
          },
        ]}
        question={"Do you care where the wine is from?"}
        defaultOutput={"I'm looking for a wine from"}
        canChooseMultiple={true}
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

export default WineCountryOrigin;
