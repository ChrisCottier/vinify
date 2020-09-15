import {
  SET_FORM,
  SET_SELECTION,
  NEW_FORM,
  CHANGE_PAGE,
} from "../actions/forms";

const defaultState = {
  form: null,
  pageNum: 1,
  country: [],
  selections: {
    country: [],
    price: [],
    redWineVerietal: [],
    wineRating: [],
    wineNotes: [],
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
      // debugger;
      let array = state.selections[category];
      array = [...array];
      const indexOfValue = array.indexOf(value);

      if (indexOfValue === -1) {
        array = state.selections[category].concat(value);
        //  = [...array, value];
      } else {
        // debugger;
        array.splice(indexOfValue, 1);
      }

      // debugger;
      const retVal = {
        ...state,
        selections: {
          ...state.selections,
          [category]: array,
        },
      };
      // debugger;
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

    default:
      return state;
  }
};

export default forms;

// case SET_SELECTION: {
//   // const newCountry = [...state.selections.country];
//   // newCountry.push(action.value)
//   // return Object.assign({}, state, {selections: {
//   //   country: [...newCountry],
//   //   price: []
//   // }})
//   let newSelections = Object.assign({}, state.selections);
//   const { category, value } = action;
//   // debugger;
//   let array = newSelections[category];
//   array = [...array];
//   const indexOfValue = array.indexOf(value);

//   if (indexOfValue === -1) {
//     array = [...array, value];
//   } else {
//     array.splice(indexOfValue, 1);
//   }

//   newSelections[category] = array;
//   // debugger;

//   return {
//     ...state,
//     selections: { ...newSelections },
//   };
// }
