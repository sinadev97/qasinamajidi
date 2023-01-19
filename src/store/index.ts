import { configureStore } from "@reduxjs/toolkit";
import UIState from "./UI";
import questionsState from "./questions";
import answersState from "./answers";

const store = configureStore({
  reducer: {
    UI: UIState,
    questions: questionsState,
    answers: answersState,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
