import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import { IState } from "./types";
import javascript, {
  setAnswerActionCreator as jsSetAnswerActionCreator,
  resetAnswerActionCreator as jsResetAnswerActionCreator,
} from "./javascript";
import html, {
  setAnswerActionCreator as htmlSetAnswerActionCreator,
  resetAnswerActionCreator as htmlResetAnswerActionCreator,
} from "./html";
import css, {
  setAnswerActionCreator as cssSetAnswerActionCreator,
  resetAnswerActionCreator as cssResetAnswerActionCreator,
} from "./css";
import typescript, {
  setAnswerActionCreator as typescriptSetAnswerActionCreator,
  resetAnswerActionCreator as typescriptResetAnswerActionCreator,
} from "./typescript";

export const reducer = combineReducers({
  user,
  javascript,
  html,
  css,
  typescript,
});

export type language = "javascript" | "html" | "css" | "typescript";

const allQuestionSelector = (lang: language) => {
  return (store: IState) => {
    return store[lang].questions;
  };
};

const questionSelector = (lang: language, index: number) => {
  return (state: IState) => {
    return state[lang].questions[index];
  };
};

const questionLengthSelector = (lang: language) => {
  return (state: IState) => {
    return state[lang].totalQuestions;
  };
};

//setAnswer actions creators
const setAnswerMap = {
  javascript: jsSetAnswerActionCreator,
  html: htmlSetAnswerActionCreator,
  css: cssSetAnswerActionCreator,
  typescript: typescriptSetAnswerActionCreator,
};
const setAnswerActionCreator = function (lang: language) {
  return setAnswerMap[lang];
};

//reset actions creators
const resetAnswerMap = {
  javascript: jsResetAnswerActionCreator,
  html: htmlResetAnswerActionCreator,
  css: cssResetAnswerActionCreator,
  typescript: typescriptResetAnswerActionCreator,
};
const resetAnswerActionCreator = function (lang: language) {
  return resetAnswerMap[lang];
};

export { allQuestionSelector, questionSelector, questionLengthSelector };
export { setAnswerActionCreator };
export { resetAnswerActionCreator };

export default configureStore({
  reducer,
});
