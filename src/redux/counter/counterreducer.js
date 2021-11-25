import {
  INCREMENTBYONE,
  DECREMENTBYONE,
  INCREMENTBYFIFTEEN,
  DECREMENTBYTEN,
} from "./counteractions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTBYONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case INCREMENTBYFIFTEEN:
      return {
        ...state,
        counter: state.counter + 15,
      };
    case DECREMENTBYONE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case DECREMENTBYTEN:
      return {
        ...state,
        counter: state.counter - 10,
      };
    default:
      return state;
  }
};

export default counterReducer;
