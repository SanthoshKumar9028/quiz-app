import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import javascript, {
  setAnswerActionCreator as jsSetAnswerActionCreator,
  resetAnswerActionCreator as jsResetAnswerActionCreator,
} from "./javascript";
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
};
const setAnswerActionCreator = function (lang: language) {
  return setAnswerMap[lang];
};

//reset actions creators
const resetAnswerMap = {
  javascript: jsResetAnswerActionCreator,
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
