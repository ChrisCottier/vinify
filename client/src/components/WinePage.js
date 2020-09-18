import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { wineDetails, followWine } from "../actions/wines";

const WinePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { wine } = useSelector((state) => state.wines);

  const [fetchedDetails, setFetchedDetails] = useState(false);

  useEffect(() => {
    if (fetchedDetails || !token) return;
    dispatch(wineDetails(token, id));
    setFetchedDetails(true);
  });

  const toggleFollow = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(followWine(token, wine.id));
  };

  if (!wine) return null;
  let photosArr = [wine.primary_image];
  if (wine.photos) {
    photosArr = [...photosArr, ...wine.photos.split(",")];
  }
  return (
    <main>
      <div className="container is-widescreen">
        <div id="wine-page-buttons" className="buttons">
          <NavLink to="/matches" className="button">{`< Matches`}</NavLink>
          <button className="button is-focused" onClick={toggleFollow}>
            {wine.user_follows ? (
              <i className="fas fa-heart follow-heart"></i>
            ) : (
              <i className="far fa-heart follow-heart"></i>
            )}
            <span>{wine.user_follows ? "Following" : "Follow"}</span>
          </button>
        </div>
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
