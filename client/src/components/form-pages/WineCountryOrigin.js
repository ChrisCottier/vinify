import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../FormPage";

const WineCountryOrigin = () => {
  return (
    <>
      <FormPage
        category="country"
        options={[
          {
            optionText: "United States",
            optionValue: "USA",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/usa.png" />
            ),
          },
          {
            optionText: "France",
            optionValue: "France",
            optionPic: (
              <img src="https://img.icons8.com/officel/96/000000/france.png" />
            ),
          },
          {
            optionText: "Spain",
            optionValue: "Spain",
            optionPic: (
              <img src="https://img.icons8.com/plasticine/100/000000/spain.png" />
            ),
          },
          {
            optionText: "Italy",
            optionValue: "Italy",
            optionPic: (
              <img src="https://img.icons8.com/officel/96/000000/italy.png" />
            ),
          },
          {
            optionText: "Anywhere",
            optionValue: "anywhere",
            optionPic: (
              <img src="https://img.icons8.com/color/96/000000/globe--v1.png" />
            ),
          },
        ]}
        question={"Do you care where the wine is from?"}
        defaultOutput={"I'm looking for a wine from"}
        canChooseMultiple={true}
        type="selections"
        // previous={null}
        // next='redirect'
      ></FormPage>
    </>
  );
};

{
  /* <a href="https://icons8.com/icon/bMuMH6-iock_/usa">USA icon by Icons8</a> */
}
{
  /* <a href="https://icons8.com/icon/zFwXFzSkitKP/italy">Italy icon by Icons8</a> */
}
{
  /* <a href="https://icons8.com/icon/2ws6me7PWfkO/france">France icon by Icons8</a>
<a href="https://icons8.com/icon/fpymAzUxfdCy/spain">Spain icon by Icons8</a> */
}
{
  /* <a href="https://icons8.com/icon/63766/globe">Globe icon by Icons8</a> */
}
export default WineCountryOrigin;
