import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const DessertPairing = () => {
  return (
    <>
      <FormPage
        category="pairings"
        options={[
          {
            optionText: "Vanilla",
            optionValue: "vanilla",
            optionPic: (
              <img src="https://img.icons8.com/emoji/96/000000/soft-ice-cream-emoji.png" />
            ),
          },
          {
            optionText: "Dark Chocoalte",
            optionValue: "dark chocolate",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/chocolate-bar.png" />
            ),
          },
          {
            optionText: "Milk Chocoalte",
            optionValue: "milk chocolate",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/chocolate-bar.png" />
            ),
          },
          {
            optionText: "Fruit Pie",
            optionValue: "fruit pie",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/pie.png" />
            ),
          },
          {
            optionText: "Cookies",
            optionValue: "cookies",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/cookies.png" />
            ),
          },
          {
            optionText: "Sweet Cake",
            optionValue: "sweet cake",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/cake.png" />
            ),
          },
          {
            optionText: "Cheesecake",
            optionValue: "cheesecake",
            optionPic: (
              <img src="https://img.icons8.com/dusk/64/000000/piece-of-lemon-cake--v1.png" />
            ),
          },
          {
            optionText: "Fruit / Sorbet",
            optionValue: "fruit",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/ice-cream-bowl.png" />
            ),
          },
          {
            optionText: "Ice cream",
            optionValue: "ice cream",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/banana-split.png" />
            ),
          },
        ]}
        question="What kind of dessert are we pairing with?"
        defaultOutput={"I'm trying to pair with"}
        canChooseMultiple={true}
        type="selections"
      ></FormPage>
    </>
  );
};

{
  /*
<a href="https://icons8.com/icon/9TNVXg2YE8Dq/soft-ice-cream-emoji">Soft Ice Cream Emoji icon by Icons8</a>
<a href="https://icons8.com/icon/36650/chocolate-bar">Chocolate Bar icon by Icons8</a>
<a href="https://icons8.com/icon/97692/chocolate-bar">Chocolate Bar icon by Icons8</a>
<a href="https://icons8.com/icon/97700/pie">Pie icon by Icons8</a>
<a href="https://icons8.com/icon/HEA9CC9dqq8c/cookies">Cookies icon by Icons8</a>
<a href="https://icons8.com/icon/ooKyO8l78rHy/cake">Cake icon by Icons8</a>
<a href="https://icons8.com/icon/97316/piece-of-lemon-cake">Piece of Lemon Cake icon by Icons8</a>
<a href="https://icons8.com/icon/Ge14JUvuOdA6/ice-cream-sundae">Ice Cream Sundae icon by Icons8</a>
<a href="https://icons8.com/icon/BhYDYLq3whjm/banana-split">Banana Split icon by Icons8</a><a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>

*/
}
export default DessertPairing;
