import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const PairingOptions = () => {
  return (
    <>
      <FormPage
        category="pairingCategory"
        options={[
          {
            optionText: "Cheeses",
            optionValue: "cheese",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
            ),
          },
          {
            optionText: "Meats",
            optionValue: "meat",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/rack-of-lamb.png" />
            ),
          },
          {
            optionText: "Seafoods",
            optionValue: "seafood",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/dressed-fish.png" />
            ),
          },
          {
            optionText: "Desserts",
            optionValue: "dessert",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/banana-split.png" />
            ),
          },
          {
            optionText: "Ethnic dishes",
            optionValue: "ethnic",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/chinese-noodle.png" />
            ),
          },
          {
            optionText: "Classic dishes",
            optionValue: "classic",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/pizza.png" />
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
        question={"What are you trying to pair your wine with?"}
        defaultOutput={"I'm trying to pair with"}
        canChooseMultiple={false}
        type="selections"
        // previous={null}
        // next='redirect'
      ></FormPage>
    </>
  );
};

{
  /*
<a href="https://icons8.com/icon/RmxEShND-scp/cheese">Cheese icon by Icons8</a><a href="https://icons8.com/icon/45428/apricot">Apricot icon by Icons8</a>
<a href="https://icons8.com/icon/8-bymsEqcdUB/rack-of-lamb">Rack of Lamb icon by Icons8</a><a href="https://icons8.com/icon/4ZZatudpTru2/rock">Rock icon by Icons8</a>
<a href="https://icons8.com/icon/SLtfzgeal-iv/dressed-fish">Dressed Fish icon by Icons8</a><a href="https://icons8.com/icon/80562/spa-flower">Spa Flower icon by Icons8</a>
<a href="https://icons8.com/icon/BhYDYLq3whjm/banana-split">Banana Split icon by Icons8</a><a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>
<a href="https://icons8.com/icon/97691/chinese-noodle">Chinese Noodle icon by Icons8</a>
<a href="https://icons8.com/icon/97684/pizza">Pizza icon by Icons8</a>

*/
}
export default PairingOptions;
