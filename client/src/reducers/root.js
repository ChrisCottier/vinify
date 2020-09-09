import { combineReducers } from "redux";

import modals from "./modals";
import auth from "./auth";

const rootReducer = combineReducers({
  modals,
  auth,
});

export default rootReducer;
