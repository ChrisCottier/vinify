import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FIND_WINE_MODAL } from "../actions/modals";
import { findStores } from "../actions/wines";
import Loading from "./Loading";

//FAICON {tag, type, size}

const FindStoreModal = ({ id }) => {
  const dispatch = useDispatch();
  const { findWineDisplay } = useSelector((state) => state.modals);
  const { stores, wineStoresId } = useSelector((state) => state.wines);

  const [locationsUpdated, setLocationsUpdated] = useState(false);

  const modalOff = () => {
    dispatch({ type: FIND_WINE_MODAL, display: "none" });
  };

  if (!findWineDisplay || !stores || !wineStoresId) return null;
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
            {/* option 1, still loading from api call */}
            {wineStoresId !== id ? <Loading></Loading> : <></>}

            {/* option 2, no stores found */}
            {wineStoresId === id && stores.length === 0 ? (
              <div>Sorry, no stores found.</div>
            ) : (
              <></>
            )}

            {/* option 3, stores found */}
            {wineStoresId === id && stores.length > 0 ? (
              stores.map((store, ind) => {
                return (
                  <a
                    key={ind}
                    className="wine-store"
                    href={store.buy_link}
                    target="_blank"
                  >
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
                  </a>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FindStoreModal;
