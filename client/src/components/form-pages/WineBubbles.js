import React from "react";

import FormPage from "../FormPage";

//chardonnay, riesling, sauv blanc, pinot grigio
const WineBubbles = () => {
  return (
    <>
      <FormPage
        category="bubbles"
        options={[
          {
            optionText: "Oh lawd yes. Get me a sparkling wine stat.",
            optionValue: "sparkling",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/champagne.png" />
            ),
          },
          {
            optionText: "Cava for me, please",
            optionValue: "cava",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/the-toast.png" />
            ),
          },
          {
            optionText: "I'm looking for some real deal champagne",
            optionValue: "champagne",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/champagne-bottle.png" />
            ),
          },
          // {
          //   optionText: "I know my stuff, Cremant de Loire",
          //   optionValue: "cremant de loire",
          //   optionPic: (
          //     <img src="https://img.icons8.com/cotton/64/000000/wine-bottle--v2.png" />
          //   ),
          // },
          {
            optionText: "Prosecco, grazie",
            optionValue: "prosecco",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/champagne-bottle.png" />
            ),
          },
          {
            optionText: "No bubbles for me today, thanks",
            optionValue: "no bubbles",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/white-wine.png" />
            ),
          },
        ]}
        question={"My status on bubbles is:"}
        defaultOutput={"I'm looking for"}
        canChooseMultiple={true}
        type="selections"
        // previous={null}
        // next='redirect'
      />
    </>
  );
};

{
  /*
  <a href="https://icons8.com/icon/97429/champagne">Champagne icon by Icons8</a>
<a href="https://icons8.com/icon/K9RvkLJtcNAX/champagne-bottle">Champagne Bottle icon by Icons8</a>
<a href="https://icons8.com/icon/-w0mHRSat_JX/champagne-bottle">Champagne Bottle icon by Icons8</a>
<a href="https://icons8.com/icon/105212/the-toast">The Toast icon by Icons8</a>

  */
}

export default WineBubbles;
