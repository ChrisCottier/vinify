import { apiUrl } from "../config";
export const SIGN_IN = "SIGN_IN";
export const LOG_OUT = "LOG_OUT";
export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const signUp = (data) => async (dispatch) => {
  const { name, email, password, confirmPassword } = data;
  const res = await fetch(`${apiUrl}/auth`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, confirmPassword }),
  });

  if (res.ok) {
    const data = await res.json();
    let { token, user } = data;
    token = token.slice(2, data.token.length - 1);
    document.cookie = `${ACCESS_TOKEN}=${token}`;
    dispatch({ type: SIGN_IN, token, user });
  }
};

export const logIn = (data) => async (dispatch) => {
  const { email, password } = data;
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    const data = await res.json();
    let { token, user } = data;
    if (data === "Bad Login") return;
    token = token.slice(2, data.token.length - 1);
    document.cookie = `${ACCESS_TOKEN}=${token}`;
    dispatch({ type: SIGN_IN, token, user });
  }
};

function getCookieValue(value) {
  const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
  return match ? match.pop() : null;
}

export const hasAccessToken = () => async (dispatch) => {
  const token = getCookieValue(ACCESS_TOKEN);

  const res = await fetch(`${apiUrl}/auth/restore`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (res.ok) {
    const data = await res.json();
    const { validated, token, user } = data;
    if (validated) {
      dispatch({ type: SIGN_IN, token, user });
    }
  }
};
