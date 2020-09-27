import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const ClassicFoodsPairing = () => {
  return (
    <>
      <FormPage
        category="pairings"
        options={[
          {
            optionText: "Hamburger",
            optionValue: "burger",
            optionPic: (
              <img src="https://img.icons8.com/fluent/96/000000/hamburger.png" />
            ),
          },
          {
            optionText: "Mac and cheese",
            optionValue: "mac and cheese",
            optionPic: (
              <img src="https://img.icons8.com/fluent/96/000000/porridge.png" />
            ),
          },
          {
            optionText: "Pizza",
            optionValue: "pizza",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/pizza.png" />
            ),
          },
          {
            optionText: "Barbeque",
            optionValue: "BBQ",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/weber.png" />
            ),
          },
          {
            optionText: "Fried Chicken",
            optionValue: "fried chicken",
            optionPic: (
              <img src="https://img.icons8.com/fluent/96/000000/fried-chicken.png" />
            ),
          },
          {
            optionText: "Sandwich",
            optionValue: "sandwich",
            optionPic: (
              <img src="https://img.icons8.com/emoji/96/000000/sandwich-emoji.png" />
            ),
          },
        ]}
        question="What do you want to pair with?"
        defaultOutput={"I'm trying to pair with"}
        canChooseMultiple={true}
        type="selections"
      ></FormPage>
    </>
  );
};

{
  /*
<a href="https://icons8.com/icon/erEevcUCwAMR/hamburger">Hamburger icon by Icons8</a>
<a href="https://icons8.com/icon/woYHrOwbingr/porridge">Porridge icon by Icons8</a>
<a href="https://icons8.com/icon/11NBksX4Pi8y/weber">Weber icon by Icons8</a>
<a href="https://icons8.com/icon/rGVpDpnHCPq8/fried-chicken">Fried Chicken icon by Icons8</a>

<a href="https://icons8.com/icon/HwIEsEmuCUlw/sandwich">Sandwich icon by Icons8</a>

*/
}
export default ClassicFoodsPairing;
