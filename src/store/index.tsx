import { configureStore } from "@reduxjs/toolkit";
import newQuestionState from "./newQuestion";

const store = configureStore({
  reducer: {
    newQuestion: newQuestionState,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
