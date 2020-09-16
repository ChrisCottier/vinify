import { apiUrl } from "../config";

export const SEARCH_WINES = "SEARCH_WINES";

export const searchWines = (data) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/wines/matches`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
  }
};
