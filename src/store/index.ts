import { configureStore } from "@reduxjs/toolkit";
import UIState from "./UI";

const store = configureStore({
  reducer: {
    UI: UIState,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
