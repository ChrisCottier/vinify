import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const MeatPairing = () => {
  return (
    <>
      <FormPage
        category="pairings"
        options={[
          {
            optionText: "Beef",
            optionValue: "beef",
            optionPic: (
              <img src="https://img.icons8.com/emoji/96/000000/cut-of-meat-emoji.png" />
            ),
          },
          {
            optionText: "Lamb",
            optionValue: "lamb",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/rack-of-lamb.png" />
            ),
          },
          {
            optionText: "Pork",
            optionValue: "pork",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/steak-rare.png" />
            ),
          },
          {
            optionText: "Chicken",
            optionValue: "chicken",
            optionPic: (
              <img src="https://img.icons8.com/fluent/96/000000/poultry-leg.png" />
            ),
          },
          {
            optionText: "Turkey",
            optionValue: "turkey",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/thanksgiving.png" />
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
        question={"What meat are we trying to pair with?"}
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
<a href="https://icons8.com/icon/8-bymsEqcdUB/rack-of-lamb">Rack of Lamb icon by Icons8</a><a href="https://icons8.com/icon/4ZZatudpTru2/rock">Rock icon by Icons8</a>
<a href="https://icons8.com/icon/hwB2vUsbIvJ2/cut-of-meat">Cut Of Meat icon by Icons8</a>
<a href="https://icons8.com/icon/1vzbQymCwtpJ/meat">Meat icon by Icons8</a>
<a href="https://icons8.com/icon/2snCL7YDgvC3/poultry-leg">Poultry Leg icon by Icons8</a>
<a href="https://icons8.com/icon/97443/thanksgiving">Thanksgiving icon by Icons8</a>
*/
}
export default MeatPairing;
