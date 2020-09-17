import { MATCHING_WINES } from "../actions/wines";

const wines = (state = {}, action) => {
  switch (action.type) {
    case MATCHING_WINES: {
      return {
        ...state,
        matches: action.matches,
      };
    }

    default:
      return { ...state };
  }
};

export default wines;
