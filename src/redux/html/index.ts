import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types";

import questions from "./questions";

type SetAnswerPayloadType = { index: number; answer: any };

const htmlSlice = createSlice({
  name: "html",
  initialState: { totalQuestions: questions.length, questions },
  reducers: {
    setAnswer(state, { payload }: PayloadAction<SetAnswerPayloadType>) {
      const { index, answer } = payload;
      if (state.questions[index]) {
        state.questions[index].userAnswer = answer;
      }
    },
    restAnswers(state) {
      for (let question of state.questions) {
        question.userAnswer = null;
      }
    },
  },
});

const questionSelector = (index: number) => {
  return (state: IState) => {
    return state.html.questions[index];
  };
};

const allQuestionSelector = (state: IState) => {
  return state.html.questions;
};

const questionLengthSelector = (state: IState) => {
  return state.html.totalQuestions;
};

export { questionSelector, allQuestionSelector, questionLengthSelector };

export const {
  setAnswer: setAnswerActionCreator,
  restAnswers: resetAnswerActionCreator,
} = htmlSlice.actions;

export default htmlSlice.reducer;
