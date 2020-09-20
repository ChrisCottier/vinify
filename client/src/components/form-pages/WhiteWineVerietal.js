import React from "react";

import FormPage from "../FormPage";

//chardonnay, riesling, sauv blanc, pinot grigio
const WhiteWineVerietal = () => {
  return (
    <>
      <FormPage
        category="verietal"
        options={[
          {
            optionText: "Chardonnay",
            optionValue: "chardonnay",
            optionPic: <img src="static/white-grapes.png" />,
          },
          {
            optionText: "Riesling",
            optionValue: "riesling",
            optionPic: <img src="static/white-grapes.png" />,
          },
          {
            optionText: "Sauvignon Blanc",
            optionValue: "sauvignon blanc",
            optionPic: <img src="static/white-grapes.png" />,
          },
          {
            optionText: "Pinot Grigio",
            optionValue: "pinot grigio",
            optionPic: <img src="static/white-grapes.png" />,
          },
          // {
          //   optionText: "Something Else!",
          //   optionValue: "niche",
          //   optionPic: (
          //     <img src="https://img.icons8.com/cotton/64/000000/wine-bottle--v2.png" />
          //   ),
          // },
          {
            optionText: "Anything",
            optionValue: "anything",
            optionPic: <img src="static/white-grapes.png" />,
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
  /* <a href="https://icons8.com/icon/vfW_Uk1f51k4/wine-bottle">Wine Bottle icon by Icons8</a>
  <a href="https://icons8.com/icon/JeeucYjaoLz8/shrug-emoticon">Shrug Emoticon icon by Icons8</a>*/
}

export default WhiteWineVerietal;
