import { createStore } from "redux";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECRIMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const Store = createStore(counterReducer);

export default Store;
