import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const WhiteWineNotes = () => {
  return (
    <>
      <FormPage
        category="notes"
        options={[
          {
            optionText: "Citrus",
            optionValue: "citrus",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/citrus.png" />
            ),
          },
          {
            optionText: "Stone Fruit",
            optionValue: "stone fruit",
            optionPic: (
              <img src="https://img.icons8.com/office/80/000000/apricot.png" />
            ),
          },
          {
            optionText: "Tropical fruit",
            optionValue: "tropical fruit",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/pineapple.png" />
            ),
          },
          {
            optionText: "Minerality",
            optionValue: "minerality",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/rock.png" />
            ),
          },
          {
            optionText: "Smooth & Creamy",
            optionValue: "smooth",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/ice-pop-yellow--v2.png" />
            ),
          },
          {
            optionText: "Floral",
            optionValue: "floral",
            optionPic: (
              <img src="https://img.icons8.com/doodle/96/000000/spa-flower.png" />
            ),
          },
          {
            optionText: "Honey",
            optionValue: "honey",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/honeycombs--v2.png" />
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
  /*
<a href="https://icons8.com/icon/69650/citrus">Citrus icon by Icons8</a>
<a href="https://icons8.com/icon/45428/apricot">Apricot icon by Icons8</a>
<a href="https://icons8.com/icon/DCy17wDYL1IA/pineapple">Pineapple icon by Icons8</a>
<a href="https://icons8.com/icon/4ZZatudpTru2/rock">Rock icon by Icons8</a>
<a href="https://icons8.com/icon/zkq9Nn23H3C5/ice-pop-yellow">Ice Pop Yellow icon by Icons8</a>
<a href="https://icons8.com/icon/80562/spa-flower">Spa Flower icon by Icons8</a>
<a href="https://icons8.com/icon/105125/honeycombs">Honeycombs icon by Icons8</a>
<a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>*/
}
export default WhiteWineNotes;
