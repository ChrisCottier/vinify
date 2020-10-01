import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FIND_WINE_MODAL } from "../actions/modals";
import { findStores } from "../actions/wines";

//FAICON {tag, type, size}

const FindStoreModal = ({ id }) => {
  const dispatch = useDispatch();
  const { findWineDisplay } = useSelector((state) => state.modals);

  const [locationsUpdated, setLocationsUpdated] = useState(false);

  useEffect(() => {
    if (locationsUpdated) return;
    dispatch(findStores(id));
    setLocationsUpdated(true);
  });

  const modalOff = () => {
    dispatch({ type: FIND_WINE_MODAL, display: "none" });
  };

  if (!findWineDisplay) return null;
  return (
    <div
      id="sign-up-modal"
      className="modal"
      style={{ display: findWineDisplay }}
    >
      <div className="modal-background" onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Store Finder</p>
        </header>
        <section className="modal-card-body">
          <div id="matching-store-container"></div>
        </section>
      </div>
    </div>
  );
};

export default FindStoreModal;
