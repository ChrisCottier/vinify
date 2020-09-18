import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

const MatchCard = ({ match }) => {
  const [backgroundColor, setBackroundColor] = useState("rgba(85, 0, 30, 0.8)");
  return (
    <NavLink
      className="match-container"
      onMouseEnter={() => setBackroundColor("rgba(133, 3, 15, 1)")}
      onMouseLeave={() => setBackroundColor("rgba(85, 0, 30, 0.8)")}
      to={`/wines/${match.id}`}
    >
      <div
        className="match-background"
        style={{ backgroundColor: backgroundColor }}
      ></div>
      <div className="match-content-container">
        <div className="match-content-left">
          {/* TODO DROP SHADOW */}
          <span className="match-name">{match.name}</span>
          <span>{match.vintage ? `${match.vintage}` : ""}</span>
          <span>
            {match.avg_price ? `$${match.avg_price}` : "Price Unavailable"}
          </span>
        </div>
        <img src={match.primary_image} className="match-image" />
        <div className="match-content-right">
          <span>{match.verietal ? match.verietal : ""}</span>
          <span>{match.country ? match.country : ""}</span>
        </div>
      </div>
    </NavLink>
  );
};

const Matches = () => {
  const { matches } = useSelector((state) => state.wines);
  const { form } = useSelector((state) => state.forms);

  const handleScroll = (event) => {
    console.log("scroll");
    console.log(event);
    event.preventDefault();
    if (event.deltaY > 0) {
      event.currentTarget.scrollLeft += 100;
    } else {
      event.currentTarget.scrollLeft -= 100;
    }
  };

  if (!matches) return null;
  if (!form) return <Redirect to="/choose-wine-color"></Redirect>;
  if (matches.length === 0) {
    return (
      <main>
        <div>no matches</div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="container is-widescreen">
          <div className="matches-container">
            <div className="horizontal-scroll-wrapper" onWheel={handleScroll}>
              {matches.map((match) => {
                return <MatchCard match={match} key={match.id}></MatchCard>;
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Matches;
