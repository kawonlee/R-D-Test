import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice"; // import counterSlice.reducer

const combineReducer = combineReducers({
  counterSlice,
});

const store = configureStore({
  reducer: combineReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
