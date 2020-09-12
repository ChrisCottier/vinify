

const defaultState = {
    form: null,
    selections: {
        
    }
};

const forms = (state = defaultState, action) => {
  switch (action.type) {
    // case SIGN_UP_MODAL: {
    //   return {
    //     ...state,
    //     signUpDisplay: action.display,
    //   };
    // }

    default:
      return state;
  }
};

export default forms;
