import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const EthnicCuisinesPairing = () => {
  return (
    <>
      <FormPage
        category="pairings"
        options={[
          {
            optionText: "Mexican",
            optionValue: "Mexican",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/wrap.png" />
            ),
          },
          {
            optionText: "Chinese",
            optionValue: "Chinese",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/chinese-noodle.png" />
            ),
          },
          {
            optionText: "Thai",
            optionValue: "Thai",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/soup-plate.png" />
            ),
          },
          {
            optionText: "Italian",
            optionValue: "Italian",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/spaghetti.png" />
            ),
          },
          {
            optionText: "Indian",
            optionValue: "Indian",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/naan.png" />
            ),
          },
          {
            optionText: "Japanese",
            optionValue: "Japanese",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/sushi.png" />
            ),
          },
        ]}
        question="What kind of cuisine are you interested in?"
        defaultOutput={"I'm trying to pair with"}
        canChooseMultiple={true}
        type="selections"
      ></FormPage>
    </>
  );
};

{
  /*
  <img src="https://img.icons8.com/plasticine/100/000000/chinese-noodle.png"/>
<a href="https://icons8.com/icon/97685/wrap">Wrap icon by Icons8</a>
<a href="https://icons8.com/icon/0Gi7r8YcXKVU/soup-plate">Soup Plate icon by Icons8</a>
<a href="https://icons8.com/icon/97688/spaghetti">Spaghetti icon by Icons8</a>
<a href="https://icons8.com/icon/45261/naan">Naan icon by Icons8</a>
<a href="https://icons8.com/icon/97702/sushi">Sushi icon by Icons8</a>


*/
}
export default EthnicCuisinesPairing;
