import { RootState } from "./../../../redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = 99;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: number, action: any): number => {
      return state + 1;
    },
    decrement: (state: number, action: any): number => {
      return state - 1;
    },
  },
});

export const counterActions = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counter;
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer;
