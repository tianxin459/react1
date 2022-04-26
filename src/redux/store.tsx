import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "src/components/features/counter/counterSlice";
import userSlice from "src/components/features/userSlice";

const initialState = {
  counter: 0,
  innerObj: { innerCounter: 0 },
};

// let reducers = (state = initialState, action: { type: string; payload: any }) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1, innerObj: { innerCounter: state.counter + 1 } };
//     case "decrement":
//       return { counter: state.counter - 1, innerObj: { innerCounter: state.counter - 1 } };
//     default:
//       return state;
//   }
// };

// let store = createStore(reducers);

let store = configureStore({
  reducer: {
    counter: counterSlice,
    users: userSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
