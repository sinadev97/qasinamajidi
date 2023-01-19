import { createSlice } from "@reduxjs/toolkit";
import { QuestionDto } from "../api/questions";

const initialState: QuestionDto[] = [];

const questionsData = createSlice({
  name: "questionsData",
  initialState: initialState,
  reducers: {
    getAll: (state, action: { type: string; payload: QuestionDto[] }) => {
      return action.payload;
    },
    add: (state, action: { type: string; payload: QuestionDto }) => {
      const newState = [...state, action.payload];
      return newState;
    },
  },
});

export const questionsActions = questionsData.actions;

export default questionsData.reducer;
