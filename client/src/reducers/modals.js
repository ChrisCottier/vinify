import { SIGN_UP_MODAL, LOG_IN_MODAL } from "../actions/modals";

const defaultState = {
  signUpDisplay: "none",
  logInDisplay: "none",
};

const modals = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_UP_MODAL: {
      return {
        ...state,
        signUpDisplay: action.display,
      };
    }

    case LOG_IN_MODAL: {
      return {
        ...state,
        logInDisplay: action.display,
      };
    }

    default:
      return state;
  }
};

export default modals;
