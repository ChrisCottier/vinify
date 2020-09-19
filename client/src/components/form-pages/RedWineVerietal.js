import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

//cab, syrah, malbec, merlot, sangio, pinot, grenache, other, anything!
const RedWineVerietal = () => {
  return (
    <>
      <FormPage
        category="verietal"
        options={[
          {
            optionText: "Cabernet Sauvignon",
            optionValue: "Cabernet Sauvignon",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
            ),
          },
          {
            optionText: "Syrah",
            optionValue: "Syrah",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
            ),
          },
          {
            optionText: "Merlot",
            optionValue: "Merlot",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
            ),
          },
          {
            optionText: "Pinot Noir",
            optionValue: "Pinot Noir",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
            ),
          },
          {
            optionText: "Sangiovese",
            optionValue: "Sangiovese",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
            ),
          },
          {
            optionText: "Grenache",
            optionValue: "Grenache",
            optionPic: (
              <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
            ),
          },
          // {
          //   optionText: "Something Else!",
          //   optionValue: "niche",
          //   optionPic: (
          //     <img src="https://img.icons8.com/cotton/64/000000/grape.png" />
          //   ),
          // },
          {
            optionText: "Anything",
            optionValue: "all",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/shrug-emoticon.png" />
            ),
          },
        ]}
        question={"What grape strikes your fancy?"}
        defaultOutput={"I'm craving a"}
        canChooseMultiple={true}
        type="selections"
        // previous={null}
        // next='redirect'
      />
    </>
  );
};

{
  /* <a href="https://icons8.com/icon/69651/grape">Grape icon by Icons8</a>
  <a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>*/
}

export default RedWineVerietal;
