import { createSlice } from "@reduxjs/toolkit";
import { AnswerDto } from "../api/questions";

const initialState: AnswerDto[] = [];

const answersData = createSlice({
  name: "answersData",
  initialState: initialState,
  reducers: {
    getAll: (state, action: { type: string; payload: AnswerDto[] }) => {
      return action.payload;
    },
    add: (state, action: { type: string; payload: AnswerDto }) => {
      const newState = [...state, action.payload];
      return newState;
    },
  },
});

export const answersActions = answersData.actions;

export default answersData.reducer;
