import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { plus, minus } = actions;

export default reducer;
