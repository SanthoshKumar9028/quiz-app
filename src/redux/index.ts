import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import javascript from "./javascript";
import { IState } from "./types";

export const reducer = combineReducers({
  user,
  javascript,
});

export type language = "javascript";

const allQuestionSelector = (lang: language) => {
  return (store: IState) => {
    return store[lang].questions;
  };
};

export { allQuestionSelector };

export default configureStore({
  reducer,
});
