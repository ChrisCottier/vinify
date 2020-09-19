import { combineReducers } from "redux";

import modals from "./modals";
import auth from "./auth";
import forms from "./forms";
import wines from "./wines";
import follows from "./follows";

const rootReducer = combineReducers({
  modals,
  auth,
  forms,
  wines,
  follows,
});

export default rootReducer;
