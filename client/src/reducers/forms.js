import {SET_FORM, SET_SELECTION, NEW_FORM, CHANGE_PAGE} from '../actions/forms'

const defaultState = {
    form: null,
    pageNum:1,
    selections: {
        country: [],
        price: [],
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

    // case SET_SELECTION: {
    //     const newSelections = state.selections
    //     newSelections[action.category] = action.value;
    //     return {
    //         ...state,
    //         selections: {...newSelections}
    //     }
    // }

      case SET_SELECTION: {

        let newSelections = state.selections
        const {category, value} = action
        let array = newSelections[category];
        // console.log('what im adding to', array)
        const indexOfValue = array.indexOf(value);
        // console.log('index of val in array', indexOfValue)
        if (indexOfValue === -1) {
          array = [...array, value]
          // console.log('array after insert', array)
        } else {
          // console.log('splice')
          array.splice(indexOfValue, 1)
        }

        // console.log('array outside of block',array)

        // console.log(`newSelections before reassign of ${category}`, newSelections)
        newSelections[category] = array
        // console.log('newSelections after reassign', newSelections)
        // console.log(action)


        return {
            ...state,
            selections: {...newSelections},
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

    case CHANGE_PAGE: {
      return {
        ...state,
        pageNum: action.value
      }
    }

    default:
      return state;
  }
};

export default forms;
