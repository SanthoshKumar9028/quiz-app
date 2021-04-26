import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import javascript from "./javascript";

export const reducer = combineReducers({
  user,
  javascript,
});

export default configureStore({
  reducer,
});
