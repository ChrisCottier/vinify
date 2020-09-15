import React from "react";
import {Redirect} from 'react-router-dom'

import FormPage from "../FormPage";

const WinePrice = () => {
  return (
    <>
      <FormPage
        category='price'
        options={[
          { optionText: "Under $20", optionValue: 'under $20', optionPic: <img src='https://img.icons8.com/ios/100/000000/usa-map.png' /> },
          { optionText: "Between $20 and $40", optionValue: 'from $20 to $40', optionPic: <img src="https://img.icons8.com/ios/100/000000/france-map.png"/>},
          { optionText: "Between $40 and $60", optionValue: 'from $40 to $60', optionPic: <img src="https://img.icons8.com/ios/100/000000/spain-map.png"/> },
          { optionText: "Between $60 and $100", optionValue: 'from $60 to $100', optionPic: <img src='https://img.icons8.com/ios/100/000000/usa-map.png' /> },
          { optionText: "I'm ballin. Over $100", optionValue: 'over $100', optionPic: <img src="https://img.icons8.com/ios/100/000000/france-map.png"/>},
        ]}
        question={"What's your budget?"}
        defaultOutput={"I'm looking for that's"}
        canChooseMultiple={true}
        type='selections'
      ></FormPage>
    </>
  );
};

{/* <a href="https://icons8.com/icon/45746/usa-map">USA Map icon by Icons8</a>
<a href="https://icons8.com/icon/58460/france-map">France Map icon by Icons8</a>
<a href="https://icons8.com/icon/58505/spain-map">Spain Map icon by Icons8</a> */}

export default WinePrice;