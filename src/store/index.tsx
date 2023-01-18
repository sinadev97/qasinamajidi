import { configureStore, createSlice } from "@reduxjs/toolkit";

const newQuestionSlice = createSlice({
  name: "newQuestion",
  initialState: { isOpen: false },
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

const store = configureStore({
  reducer: {
    newQuestionModal: newQuestionSlice.reducer,
  },
});

export const newQuestionModalAction = newQuestionSlice.actions;

export default store;
