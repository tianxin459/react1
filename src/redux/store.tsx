import { createStore } from "redux";

const initialState = {
  counter: 0,
};

let reducers = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

let store = createStore(reducers);

export default store;
