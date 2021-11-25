import {
  INCREMENTBYONE,
  DECREMENTBYONE,
  INCREMENTBYFIFTEEN,
  DECREMENTBYTEN,
} from "./counteractions";

export const incrementByOne = () => {
  return {
    type: INCREMENTBYONE,
  };
};

export const incrementByFifteen = () => {
  return {
    type: INCREMENTBYFIFTEEN,
  };
};

export const decrementByOne = () => {
  return {
    type: DECREMENTBYONE,
  };
};
export const decrementByTen = () => {
  return {
    type: DECREMENTBYTEN,
  };
};
