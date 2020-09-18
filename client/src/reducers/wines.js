import { MATCHING_WINES, WINE_DETAILS } from "../actions/wines";

const wines = (state = {}, action) => {
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

    default:
      return { ...state };
  }
};

export default wines;
