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
              <img src="https://img.icons8.com/dusk/64/000000/sprout.png" />
            ),
          },
          {
            optionText: "Oaky",
            optionValue: "oak",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/wooden-beer-keg.png" />
            ),
          },
          {
            optionText: "Red berries, fruits",
            optionValue: "bright fruit",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/raspberry.png" />
            ),
          },
          {
            optionText: "Dark berries, fruits",
            optionValue: "dark fruit",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/plum--v2.png" />
            ),
          },
          {
            optionText: "Herbs",
            optionValue: "herbs",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/parsley.png" />
            ),
          },
          {
            optionText: "Spices",
            optionValue: "spices",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/heap-of-spice.png" />
            ),
          },
          {
            optionText: "Chocolate",
            optionValue: "chocolate",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/chocolate-bar.png" />
            ),
          },
          {
            optionText: "I'm open to whatever",
            optionValue: "any",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/shrug-emoticon.png" />
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

{
  /* <a href="https://icons8.com/icon/46843/sprout">Sprout icon by Icons8</a>
<a href="https://icons8.com/icon/MFz8unOgdg1s/wooden-beer-keg">Wooden Beer Keg icon by Icons8</a>
<a href="https://icons8.com/icon/D2lvSXr5i6JD/raspberry">Raspberry icon by Icons8</a>
<a href="https://icons8.com/icon/69968/plum">Plum icon by Icons8</a>
<a href="https://icons8.com/icon/wrgV9nSA6k5f/parsley">Parsley icon by Icons8</a>
<a href="https://icons8.com/icon/qsc8k7HKtLcS/heap-of-spice">Heap Of Spice icon by Icons8</a>
<a href="https://icons8.com/icon/97692/chocolate-bar">Chocolate Bar icon by Icons8</a>
<a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>*/
}
export default RedWineNotes;
