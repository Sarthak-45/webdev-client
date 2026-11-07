import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
const addSlice = createSlice({
  name: "add",
  initialState: { a: 12, b: 23, sum: 0 },
  reducers: {
    setA: (state, action: PayloadAction<number>) => {
      state.a = action.payload;
    },
    setB: (state, action: PayloadAction<number>) => {
      state.b = action.payload;
    },
    add: (state) => {
      state.sum = state.a + state.b;
    },
  },
});
export const { setA, setB, add } = addSlice.actions;
export default addSlice.reducer;
