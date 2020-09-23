import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Loading from "./Loading";
const Random = () => {
  // const dispatch = useDispatch();
  // const { wine } = useSelector((state) => state.wines);

  // const [gotRandom, setGotRandom] = useState(false);
  // useEffect(() => {
  //   if (gotRandom) return;
  //   dispatch(getRandomWine)
  // });

  // if (!gotRandom || !wine) return <Loading></Loading>;
  const randomId = Math.floor(Math.random() * 81580);
  return <Redirect to={`/wines/${randomId}`}></Redirect>;
};

export default Random;
