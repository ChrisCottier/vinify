import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const WinePrice = () => {
  return (
    <>
      <FormPage
        category="price"
        options={[
          {
            optionText: "Under $20",
            optionValue: "under $20",
            optionPic: (
              <img src="https://img.icons8.com/dusk/64/000000/average.png" />
            ),
          },
          {
            optionText: "Between $20 and $40",
            optionValue: "from $20 to $40",
            optionPic: (
              <img src="https://img.icons8.com/dusk/64/000000/average-2.png" />
            ),
          },
          {
            optionText: "Between $40 and $60",
            optionValue: "from $40 to $60",
            optionPic: (
              <img src="https://img.icons8.com/dusk/64/000000/expensive.png" />
            ),
          },
          {
            optionText: "Between $60 and $100",
            optionValue: "from $60 to $100",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/stack-of-money.png" />
            ),
          },
          {
            optionText: "I'm ballin. Over $100",
            optionValue: "over $100",
            optionPic: (
              <img src="https://img.icons8.com/office/80/000000/gold-bars.png" />
            ),
          },
          {
            optionText: "I'm open to any wine. (many more options)",
            optionValue: "any price",
            optionPic: (
              <img src="https://img.icons8.com/officel/80/000000/checked.png" />
            ),
          },
        ]}
        question={"What's your budget?"}
        defaultOutput={"I'm looking for that's"}
        canChooseMultiple={true}
        type="selections"
      ></FormPage>
    </>
  );
};

{
  /* <a href="https://icons8.com/icon/55398/average">Average icon by Icons8</a>
<a href="https://icons8.com/icon/55407/average-2">Average 2 icon by Icons8</a>
<a href="https://icons8.com/icon/46522/expensive">Expensive icon by Icons8</a>
<a href="https://icons8.com/icon/54390/stack-of-money">Stack of Money icon by Icons8</a>
<a href="https://icons8.com/icon/21178/gold-bars">Gold Bars icon by Icons8</a> */
}

export default WinePrice;
