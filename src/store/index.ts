import { configureStore } from "@reduxjs/toolkit";
import UIState from "./UI";
import questionsState from "./questions";

const store = configureStore({
  reducer: {
    UI: UIState,
    questions: questionsState,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
