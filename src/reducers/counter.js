import * as actionTypes from "../actions";

const counter = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.ADD5:
      return state + action.payload;
    case actionTypes.SUB5:
      return state - action.payload;
    default:
      return state;
  }
};
export default counter;
