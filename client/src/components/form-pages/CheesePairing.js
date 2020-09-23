import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const CheesePairing = () => {
  return (
    <>
      <FormPage
        category="pairings"
        options={[
          {
            optionText: "Cheddar",
            optionValue: "cheddar",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
            ),
          },
          {
            optionText: "Gruyere",
            optionValue: "gruyere",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
            ),
          },
          {
            optionText: "Brie",
            optionValue: "brie",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
            ),
          },
          {
            optionText: "Goat Cheese",
            optionValue: "goat cheese",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
            ),
          },
          {
            optionText: "Gouda",
            optionValue: "gouda",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
            ),
          },
          {
            optionText: "Parmesan",
            optionValue: "parmesan",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cheese.png" />
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
        question={"Quelle fromage preferez vous?"}
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
<a href="https://icons8.com/icon/RmxEShND-scp/cheese">Cheese icon by Icons8</a><a href="https://icons8.com/icon/45428/apricot">Apricot icon by Icons8</a>

*/
}
export default CheesePairing;
