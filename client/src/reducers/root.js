import { combineReducers } from "redux";

import modals from "./modals";
import auth from "./auth";
import forms from "./forms";
import wines from "./wines";

const rootReducer = combineReducers({
  modals,
  auth,
  forms,
  wines,
});

export default rootReducer;
