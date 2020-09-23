import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import Loading from "./Loading";
import { FOOTER_DISPLAY } from "../actions/modals";

const MatchCard = ({ match }) => {
  const [backgroundColor, setBackroundColor] = useState("rgba(17,17,17,0.3)");
  return (
    <NavLink
      className="match-container"
      onMouseEnter={() => setBackroundColor("rgba(224, 157, 61, 1)")}
      onMouseLeave={() => setBackroundColor("rgba(17,17,17,0.3)")}
      to={`/wines/${match.id}`}
    >
      <div
        className="match-background"
        style={{ backgroundColor: backgroundColor }}
      ></div>
      <div className="match-content-container">
        <div className="match-content-left">
          {/* TODO DROP SHADOW */}
          <span className="match-name">{`"${match.name}"`}</span>
          <span className="match-vintage">
            {match.vintage ? `${match.vintage}` : ""}
          </span>
          <span className="match-verietal">
            {match.verietal ? match.verietal : ""}
          </span>
          {/* <span>{match.country ? match.country : ""}</span> */}
          <span className="match-price">
            {match.avg_price ? `$${match.avg_price}` : "Price Unavailable"}
          </span>
        </div>
        <img src={match.primary_image} className="match-image" />
        {/* <div className="match-content-right">
          <span>{match.verietal ? match.verietal : ""}</span>
          <span>{match.country ? match.country : ""}</span>
        </div> */}
      </div>
    </NavLink>
  );
};

const Matches = () => {
  const dispatch = useDispatch();
  const { matches } = useSelector((state) => state.wines);
  const { form } = useSelector((state) => state.forms);
  const [footerOff, setFooterOff] = useState(false);

  //Footer interferes with sideways scrolling of matches, so it will be disabled
  useEffect(() => {
    if (footerOff) return;
    dispatch({ type: FOOTER_DISPLAY, display: "none" });
    setFooterOff(true);
  });

  const handleScroll = (event) => {
    // event.preventDefault();
    event.stopPropagation();
    if (event.deltaY > 0) {
      event.currentTarget.scrollLeft += 100;
    } else {
      event.currentTarget.scrollLeft -= 100;
    }
  };
  if (!form) return <Redirect to="/find"></Redirect>;
  if (!matches) return <Loading></Loading>;
  if (matches.length === 0) {
    return (
      <main>
        <div id="shadow"></div>
        <div className="container is-widescreen">
          <div id="no-matches-container">
            <span>
              We couldn't find any matching wines! Try to narrow your search.
            </span>
            <iframe
              src="https://giphy.com/embed/3o7aTskHEUdgCQAXde"
              width="480"
              height="204"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/quentin-tarantino-pulp-fiction-vincent-vega-3o7aTskHEUdgCQAXde">
                via GIPHY
              </a>
            </p>
          </div>
        </div>
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
