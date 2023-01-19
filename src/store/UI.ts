import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newQuestionModal: { isOpen: false },
};

const UISlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.newQuestionModal.isOpen = true;
    },
    closeModal: (state) => {
      state.newQuestionModal.isOpen = false;
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice.reducer;
