import { apiUrl } from "../config";
import { NEW_FORM } from "./forms";
export const SEARCH_WINES = "SEARCH_WINES";
export const MATCHING_WINES = "MATCHING_WINES";

export const searchWines = (data) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/wines/matches`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const { form } = data;
    const matches = await res.json();
    dispatch({ type: MATCHING_WINES, matches });
  }
};
