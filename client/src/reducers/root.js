import { combineReducers } from "redux";

import modals from "./modals";
import auth from "./auth";
import forms from './forms';

const rootReducer = combineReducers({
  modals,
  auth,
  forms
});

export default rootReducer;
