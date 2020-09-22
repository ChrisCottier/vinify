import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getFollows } from "../actions/follows";
import Loading from "./Loading";

const FollowTile = ({ wine }) => {
  return (
    <div className="follow-wine-container">
      <NavLink
        to={`/wines/${wine.id}`}
        className="follow-wine-pic"
        style={{ backgroundImage: `url(${wine.primary_image})` }}
      ></NavLink>
      <div className="follow-wine-details">
        <NavLink
          to={`/wines/${wine.id}`}
          className="title is-3 follow-wine-title"
        >
          {wine.name}
        </NavLink>
        <h2 className="subtitle is-5 follow-wine-winery">
          <span>By </span>
          <NavLink className="winery-name" to={`/wines/${wine.id}`}>
            {wine.winery}
          </NavLink>
        </h2>
        <div className="follow-wine-country">{wine.country}</div>
      </div>
    </div>
  );
};

const Following = () => {
  const dispatch = useDispatch();
  const { token, userId } = useSelector((state) => state.auth);
  const { follows } = useSelector((state) => state.follows);

  const [gotFavorites, setGotFavorites] = useState(false);
  useEffect(() => {
    if (gotFavorites || !token) return;
    dispatch(getFollows(token, userId));
    setGotFavorites(true);
  });

  if (!follows) return <Loading></Loading>;

  return (
    <main>
      <div id="shadow"></div>
      <div className="container is-widescreen">
        <h1 id="favorites-title">My Favorites</h1>
        <div id="user-follows-container">
          {follows.map((wine) => {
            return <FollowTile wine={wine}></FollowTile>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Following;
