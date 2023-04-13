import counterSlice from "./features/counter/counterSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  counter: counterSlice,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // redux-logger를 사용하기 위해 추가
  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
// export default store;
