import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const RoseWineNotes = () => {
  return (
    <>
      <FormPage
        category="notes"
        options={[
          {
            optionText: "Fruit Punch",
            optionValue: "fruity",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/boxing.png" />
            ),
          },
          {
            optionText: "I want a rose that tastes like candy",
            optionValue: "sweet",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/sweet-halloween-candy.png" />
            ),
          },
          {
            optionText: "Something that's got some zip",
            optionValue: "zesty",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/citrus.png" />
            ),
          },
          {
            optionText: "Something a a more spicy and savory",
            optionValue: "savory",
            optionPic: (
              <img src="https://img.icons8.com/dusk/64/000000/rack-of-lamb.png" />
            ),
          },
          {
            optionText: "Melon",
            optionValue: "melon-y",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/watermelon.png" />
            ),
          },
          {
            optionText:
              "When I close my eyes and sip, I want to see the field from the sound of music",
            optionValue: "floral",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/ikebana.png" />
            ),
          },
          {
            optionText: "I'm open to whatever",
            optionValue: "any",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/checked.png" />
            ),
          },
        ]}
        question={"What kind of flavor profile sounds good?"}
        defaultOutput={
          "My sophisticated rose pallete demands something that tastes"
        }
        canChooseMultiple={true}
        type="selections"
        notesAndOption={true}
        // previous={null}
        // next='redirect'
      ></FormPage>
    </>
  );
};

{
  /*
<a href="https://icons8.com/icon/AK6sHeXD_zaH/sweet-halloween-candy">Sweet Halloween Candy icon by Icons8</a>
<a href="https://icons8.com/icon/69650/citrus">Citrus icon by Icons8</a>
<a href="https://icons8.com/icon/01CC4h1Tzh8z/rack-of-lamb">Rack of Lamb icon by Icons8</a>
<a href="https://icons8.com/icon/H6d6GXXka8jA/watermelon">Watermelon icon by Icons8</a><a href="https://icons8.com/icon/37042/ikebana">Ikebana icon by Icons8</a>
<a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>*/
}
export default RoseWineNotes;
