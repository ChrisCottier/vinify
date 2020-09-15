import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

//cab, syrah, malbec, merlot, sangio, pinot, grenache, other, anything!
const RedWineVerietal = () => {
  return (
    <>
      <FormPage
        category="redWineVerietal"
        options={[
          {
            optionText: "Cabernet Sauvignon",
            optionValue: "Cabernet Sauvignon",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Syrah",
            optionValue: "Syrah",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/france-map.png" />
            ),
          },
          {
            optionText: "Merlot",
            optionValue: "Merlot",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/spain-map.png" />
            ),
          },
          {
            optionText: "Pinot Noir",
            optionValue: "Pinot Noir",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Sangiovese",
            optionValue: "Sangiovese",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/france-map.png" />
            ),
          },
          {
            optionText: "Grenache",
            optionValue: "Grenache",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/spain-map.png" />
            ),
          },
          {
            optionText: "Something Else!",
            optionValue: "niche",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/usa-map.png" />
            ),
          },
          {
            optionText: "Anything",
            optionValue: "all",
            optionPic: (
              <img src="https://img.icons8.com/ios/100/000000/france-map.png" />
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
  /* <a href="https://icons8.com/icon/45746/usa-map">USA Map icon by Icons8</a>
<a href="https://icons8.com/icon/58460/france-map">France Map icon by Icons8</a>
<a href="https://icons8.com/icon/58505/spain-map">Spain Map icon by Icons8</a> */
}

export default RedWineVerietal;
