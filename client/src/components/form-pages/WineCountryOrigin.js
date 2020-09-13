import React from "react";
import {Redirect} from 'react-router-dom'

import FormPage from "../FormPage";

const WineCountryOrigin = (props) => {
  const {selections, setSelections} = props;
  console.log('wine color', selections)


  return (
    <>
      <FormPage
        category='country'
        options={[
          { optionText: "United States", optionValue: 'usa', optionPic: <img src='https://img.icons8.com/ios/100/000000/usa-map.png' /> },
          { optionText: "France", optionValue: 'france', optionPic: <img src="https://img.icons8.com/ios/100/000000/france-map.png"/>},
          { optionText: "Spain", optionValue: 'spain', optionPic: <img src="https://img.icons8.com/ios/100/000000/spain-map.png"/> },
        ]}
        question={"Do you care where the wine is from?"}
        defaultOutput={"I'm looking for a wine from"}
        canChooseMultiple={true}
        type='selections'
        // selections={selections}
        // setSelections={setSelections}
        previous={null}
        next='redirect'
      ></FormPage>
    </>
  );
};

{/* <a href="https://icons8.com/icon/45746/usa-map">USA Map icon by Icons8</a>
<a href="https://icons8.com/icon/58460/france-map">France Map icon by Icons8</a>
<a href="https://icons8.com/icon/58505/spain-map">Spain Map icon by Icons8</a> */}

export default WineCountryOrigin;
