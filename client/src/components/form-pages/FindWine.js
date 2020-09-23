import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const FindWine = () => {
  return (
    <>
      <FormPage
        options={[
          {
            optionText: "Wine color, details",
            optionValue: "color",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/wine-and-grapes--v1.png" />
            ),
          },
          {
            optionText: "Food pairing",
            optionValue: "pairing",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/food-and-wine.png" />
            ),
          },
        ]}
        question={"How do you want to find your wine?"}
        defaultOutput={"I'm want to find my wine by"}
        canChooseMultiple={false}
        type="nav"
        previous={null}
        next="redirect"
      ></FormPage>
    </>
  );
};

// {
// <a href="https://icons8.com/icon/XjErzyLMflsr/food-and-wine">Food And Wine icon by Icons8</a>
// <a href="https://icons8.com/icon/118879/wine-and-grapes">Wine and Grapes icon by Icons8</a> */
// }

export default FindWine;
