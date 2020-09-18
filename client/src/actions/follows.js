import { apiUrl } from "../config";
export const GET_FOLLOWS = "GET_FOLLOWS";

export const getFollows = (token, userId) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/follows/user/${userId}`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (res.ok) {
    const follows = await res.json();
    if (follows !== false) {
      dispatch({ type: GET_FOLLOWS, follows });
    }
  }
};
