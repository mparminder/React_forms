import {
  INCREMENTBYFIFTEEN,
  INCREMENTBYONE,
  DECREMENTBYONE,
  DECREMENTBYTEN,
} from "./../Actions/index";

const intialState = {
  counter: 0,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENTBYONE:
      return {
        counter: state.counter + 1,
      };
    case DECREMENTBYONE:
      return {
        counter: state.counter - 1,
      };
    case INCREMENTBYFIFTEEN:
      return {
        counter: state.counter + 15,
      };
    case DECREMENTBYTEN:
      return {
        counter: state.counter - 10,
      };
  }
  return state;
};

export default reducer;
