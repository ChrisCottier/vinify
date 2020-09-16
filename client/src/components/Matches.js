import React from "react";
import { useSelector } from "react-redux";

const Matches = () => {
  const { matches } = useSelector((state) => state.wines);
  return (
    <main>
      <div>matches</div>
    </main>
  );
};

export default Matches;
