import { MATCHING_WINES, WINE_DETAILS, TOGGLE_FOLLOW } from "../actions/wines";

const defaultState = {
  matches: null,
};

const wines = (state = defaultState, action) => {
  switch (action.type) {
    case MATCHING_WINES: {
      return {
        ...state,
        matches: action.matches,
      };
    }

    case WINE_DETAILS: {
      return {
        ...state,
        wine: action.wine,
      };
    }

    case TOGGLE_FOLLOW: {
      return {
        ...state,
        wine: {
          ...state.wine,
          user_follows: action.following,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default wines;
