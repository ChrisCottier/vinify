import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { wineDetails } from "../actions/wines";

const WinePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { wine } = useSelector((state) => state.wines);

  const [fetchedDetails, setFetchedDetails] = useState(false);

  useEffect(() => {
    if (fetchedDetails) return;
    dispatch(wineDetails(id));
    setFetchedDetails(true);
  });

  if (!wine) return null;
  let photosArr = [wine.primary_image];
  if (wine.photos) {
    photosArr = [...photosArr, ...wine.photos.split(",")];
  }
  return (
    <main>
      <div className="container is-widescreen">
        <div className="columns">
          <div id="wine-pictures-container" className="column is-half">
            <div id="carousel-container">
              <Carousel>
                {photosArr.map((photo) => {
                  return <img className="wine-page-image" src={photo}></img>;
                })}
              </Carousel>
            </div>
          </div>
          <div id="wine-details-container" className="column is-half">
            <div>details</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WinePage;
