import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const SeafoodPairing = () => {
  return (
    <>
      <FormPage
        category="pairings"
        options={[
          {
            optionText: "White Fish",
            optionValue: "white fish",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/whole-fish.png" />
            ),
          },
          {
            optionText: "Tuna",
            optionValue: "tuna",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/tuna-steak.png" />
            ),
          },
          {
            optionText: "Salmon",
            optionValue: "salmon",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/salmon--v1.png" />
            ),
          },
          {
            optionText: "Oysters",
            optionValue: "oysters",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/oysters-with-lemon--v2.png" />
            ),
          },
          // {
          //   optionText: "Mussels",
          //   optionValue: "mussels",
          //   optionPic: (
          //     <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
          //   ),
          // },
          {
            optionText: "Crab",
            optionValue: "crab",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/crab.png" />
            ),
          },
          {
            optionText: "Shrimp",
            optionValue: "shrimp",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/prawn.png" />
            ),
          },
          {
            optionText: "Lobster",
            optionValue: "lobster",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/lobster.png" />
            ),
          },
          // {
          //   optionText: "I'm open to whatever",
          //   optionValue: "any",
          //   optionPic: (
          //     <img src="https://img.icons8.com/color/96/000000/shrug-emoticon.png" />
          //   ),
          // },
        ]}
        question={"Which fresh of salt water bounty will be enjoyed?"}
        defaultOutput={"I'm trying to pair with"}
        canChooseMultiple={true}
        type="selections"
        // previous={null}
        // next='redirect'
      ></FormPage>
    </>
  );
};

{
  /*
<a href="https://icons8.com/icon/70452/tuna-steak">Tuna Steak icon by Icons8</a>
<a href="https://icons8.com/icon/65468/salmon">Salmon icon by Icons8</a>
<a href="https://icons8.com/icon/82029/oysters-with-lemon">Oysters With Lemon icon by Icons8</a>
<a href="https://icons8.com/icon/xtp_K8TJSIbw/crab">Crab icon by Icons8</a>
<a href="https://icons8.com/icon/101722/prawn">Prawn icon by Icons8</a>
<a href="https://icons8.com/icon/ZHSVh8BQsFW7/lobster">Lobster icon by Icons8</a>
*/
}
export default SeafoodPairing;
