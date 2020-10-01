import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FIND_WINE_MODAL } from "../actions/modals";
import { findStores } from "../actions/wines";

//FAICON {tag, type, size}

const FindStoreModal = ({ id }) => {
  const dispatch = useDispatch();
  const { findWineDisplay } = useSelector((state) => state.modals);
  const { stores } = useSelector((state) => state.wines);

  const [locationsUpdated, setLocationsUpdated] = useState(false);

  // useEffect(() => {
  //   // TODO as is this functions to preload modl on every wine page,
  //   // instead perhaps have the data load only once on Find It! click
  //   if (locationsUpdated) return;
  //   dispatch(findStores(id));
  //   setLocationsUpdated(true);
  // });

  const modalOff = () => {
    dispatch({ type: FIND_WINE_MODAL, display: "none" });
  };

  if (!findWineDisplay || !stores) return null;
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
          <div id="matching-store-container">
            {stores.map((store, ind) => {
              return (
                <div key={ind} className="wine-store">
                  <div>
                    <span className="wine-store-details">List Item:</span>{" "}
                    {store.wine_name}
                  </div>
                  <div>
                    <span className="wine-store-details">List Price:</span>{" "}
                    {store.list_price}
                  </div>
                  <div>
                    <span className="wine-store-details">Store:</span>{" "}
                    {store.wine_shop}
                  </div>
                  <div>
                    <span className="wine-store-details">State:</span>{" "}
                    {store.state}
                  </div>
                  <div>
                    <span className="wine-store-details">City:</span>{" "}
                    {store.city}
                  </div>
                  <a
                    className="wine-store-buy"
                    href={store.buy_link}
                    target="_blank"
                  >
                    Buy now
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FindStoreModal;
