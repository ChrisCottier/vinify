import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

const MatchCard = ({ match }) => {
  const [backgroundColor, setBackroundColor] = useState("#111111");
  return (
    <NavLink
      className="match-container"
      onMouseEnter={() => setBackroundColor("rgba(224, 157, 61, 1)")}
      onMouseLeave={() => setBackroundColor("#111111")}
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
  if (form === null) return <Redirect to="/choose-wine-color"></Redirect>;
  if (!matches) return null;
  // if (!matches) return null;
  if (matches.length === 0) {
    return (
      <main>
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
