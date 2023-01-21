import { configureStore } from "@reduxjs/toolkit";
import cacheState from "./cacheSlice";
import UIState from "./UI";

const store = configureStore({
  reducer: {
    UI: UIState,
    cache: cacheState,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
