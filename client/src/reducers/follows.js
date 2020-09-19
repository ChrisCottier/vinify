import { GET_FOLLOWS } from "../actions/follows";

const follows = (state = {}, action) => {
  switch (action.type) {
    case GET_FOLLOWS: {
      return {
        ...state,
        follows: action.follows,
      };
    }

    default:
      return { ...state };
  }
};

export default follows;
