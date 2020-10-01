import {
  MATCHING_WINES,
  WINE_DETAILS,
  TOGGLE_FOLLOW,
  WINE_RESET,
  WINE_STORES,
  REMOVE_WINE_DATA,
} from "../actions/wines";

const defaultState = {
  matches: null,
  stores: [],
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

    case WINE_RESET: {
      return defaultState;
    }

    case WINE_STORES: {
      return {
        ...state,
        stores: action.stores,
        wineStoresId: action.wineId,
      };
    }

    case REMOVE_WINE_DATA: {
      return {
        ...state,
        wine: null,
      };
    }

    default:
      return { ...state };
  }
};

export default wines;
