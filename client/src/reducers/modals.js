import {
  SIGN_UP_MODAL,
  LOG_IN_MODAL,
  FOOTER_DISPLAY,
  FIND_WINE_MODAL,
} from "../actions/modals";

const defaultState = {
  signUpDisplay: "none",
  logInDisplay: "none",
  footerDisplay: "block",
  findWineDisplay: "none",
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

    case FOOTER_DISPLAY: {
      return {
        ...state,
        footerDisplay: action.display,
      };
    }
    case FIND_WINE_MODAL: {
      return {
        ...state,
        findWineDisplay: action.display,
      };
    }
    default:
      return state;
  }
};

export default modals;
