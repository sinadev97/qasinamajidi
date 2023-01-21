import { createSlice } from "@reduxjs/toolkit";

const initialState: { [key: string]: any } = {};

const cacheSlice = createSlice({
  name: "cache",
  initialState: initialState,
  reducers: {
    saveData: (state, action) => {
      state[action.payload.cacheKey] = action.payload.data;
    },
  },
});
export const questionsActions = cacheSlice.actions;
export const UIActions = cacheSlice.actions;
export default cacheSlice.reducer;
