import React, { useState } from "react";
import { useSelector } from "react-redux";

const MatchCard = ({ match }) => {
  return (
    <div className="match-container">
      <figure className="image is-3by5">
        <img src={match.primary_image} />
      </figure>
      <div>{match.name}</div>
    </div>
  );
};

const Matches = () => {
  const { matches } = useSelector((state) => state.wines);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (matches === undefined) return null;
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
          <div className="horizontal-scroll-wrapper">
            {matches.map((match) => {
              return <MatchCard match={match} key={match.id}></MatchCard>;
            })}
          </div>
        </div>
      </main>
    );
  }
};

export default Matches;
