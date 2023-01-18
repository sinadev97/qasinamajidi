import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  inputsValue: {
    title: "",
    description: "",
  },
};

const newQuestionSlice = createSlice({
  name: "newQuestion",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setTitle: (state, action) => {
      state.inputsValue.title = action.payload;
    },
    setDescription: (state, action) => {
      state.inputsValue.description = action.payload;
    },
  },
});

export const newQuestionActions = newQuestionSlice.actions;

export default newQuestionSlice.reducer;
