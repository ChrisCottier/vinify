import {SET_FORM, SET_SELECTION, NEW_FORM} from '../actions/forms'

const defaultState = {
    form: null,
    pageNum:1,
    selections: {
        country: [],
    }
};

const forms = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM: {
      return {
        ...state,
        form: action.value,
      };
    }

    case SET_SELECTION: {
        const newSelections = state.selections
        newSelections[action.category] = action.value;
        return {
            ...state,
            selections: {...newSelections}
        }
    }

    case NEW_FORM: {
        return {
            ...state,
            form: action.formUrl,
            pageNum: 1,
            selections: defaultState.selections
        }
    }

    default:
      return state;
  }
};

export default forms;
