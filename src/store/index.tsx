import { configureStore } from "@reduxjs/toolkit";
import newQuestionState from "./newQuestion";

const store = configureStore({
  reducer: {
    newQuestion: newQuestionState,
  },
});

export default store;
