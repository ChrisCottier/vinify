import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NEW_FORM } from "../actions/forms";
import PairingOptions from "./form-pages/PairingOptions";
import CheesePairing from "./form-pages/CheesePairing";
import SeafoodPairing from "./form-pages/SeafoodPairing";
import MeatPairing from "./form-pages/MeatPairing";
import DessertPairing from "./form-pages/DessertPairing";
import EthnicCuisinesPairing from "./form-pages/EthnicCuisines";
import ClassicFoodsPairing from "./form-pages/ClassicFoods";
import SubmitSearch from "./SubmitSearch";
//it's job is to maintain state and display each question in turn,
//allow smooth navigation between each with nice styling

//each part of the Form will have a FormPage, which will have a Question, Option(s), Response
//components that render
const WinePairingForm = () => {
  const dispatch = useDispatch();

  const { form, pageNum } = useSelector((state) => state.forms);
  const { pairingCategory } = useSelector((state) => state.forms.selections);

  useState(() => {
    if (form === undefined) return;
    if (form !== "pairing") {
      dispatch({ type: NEW_FORM, formUrl: "pairing" });
    }
  });

  if (pairingCategory === undefined) return null;
  return (
    <main>
      <div id="shadow"></div>
      <section style={{ display: pageNum === 1 ? "block" : "none" }}>
        {/* pairing options */}
        <PairingOptions></PairingOptions>
      </section>
      <section style={{ display: pageNum === 2 ? "block" : "none" }}>
        {/* if pairingtype === meat display meat else none */}
        {pairingCategory.includes("cheese") ? (
          <CheesePairing></CheesePairing>
        ) : (
          <></>
        )}
        {pairingCategory.includes("meat") ? <MeatPairing></MeatPairing> : <></>}
        {pairingCategory.includes("seafood") ? (
          <SeafoodPairing></SeafoodPairing>
        ) : (
          <></>
        )}
        {pairingCategory.includes("dessert") ? (
          <DessertPairing></DessertPairing>
        ) : (
          <></>
        )}
        {pairingCategory.includes("ethnic cuisines") ? (
          <EthnicCuisinesPairing></EthnicCuisinesPairing>
        ) : (
          <></>
        )}
        {pairingCategory.includes("classic foods") ? (
          <ClassicFoodsPairing></ClassicFoodsPairing>
        ) : (
          <></>
        )}
      </section>
      <section style={{ display: pageNum === 3 ? "block" : "none" }}>
        {/* submit form */}
        <SubmitSearch></SubmitSearch>
      </section>
    </main>
  );
};

export default WinePairingForm;
