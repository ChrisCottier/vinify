import {
  SET_FORM,
  SET_SELECTION,
  NEW_FORM,
  CHANGE_PAGE,
} from "../actions/forms";
import { MATCHING_WINES } from "../actions/wines";

const defaultState = {
  form: null,
  pageNum: 1,
  country: [],
  selections: {
    country: [],
    price: [],
    verietal: [],
    rating: [],
    notes: [],
    bubbles: [],
    pairingCategory: [],
    pairing: [],
  },
};

const forms = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM: {
      return {
        ...state,
        form: action.value,
      };
    }

    // case SET_SELECTION: {
    //     const newSelections = state.selections
    //     newSelections[action.category] = action.value;
    //     return {
    //         ...state,
    //         selections: {...newSelections}
    //     }
    // }

    case SET_SELECTION: {
      const { category, value } = action;
      let array = state.selections[category];
      array = [...array];
      const indexOfValue = array.indexOf(value);

      if (indexOfValue === -1) {
        array = state.selections[category].concat(value);
      } else {
        array.splice(indexOfValue, 1);
      }

      const retVal = {
        ...state,
        selections: {
          ...state.selections,
          [category]: array,
        },
      };
      return retVal;
    }

    case NEW_FORM: {
      return {
        ...state,
        form: action.formUrl,
        pageNum: 1,
        selections: defaultState.selections,
      };
    }

    case CHANGE_PAGE: {
      return {
        ...state,
        pageNum: action.value,
      };
    }

    case MATCHING_WINES: {
      return {
        ...state,
        selections: defaultState.selections,
        pageNum: defaultState.pageNum,
        form: action.form,
      };
    }

    default:
      return state;
  }
};

export default forms;
