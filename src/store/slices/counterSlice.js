import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    add(state, { payload }) {
      state.count += payload;
    },
    changeTo(state, { payload }) {
      state.count = payload.count;
    },
  },
});

export const { increment, decrement, reset, add, changeTo } =
  counterSlice.actions;

const counterSliceReducer = counterSlice.reducer;
export default counterSliceReducer;
