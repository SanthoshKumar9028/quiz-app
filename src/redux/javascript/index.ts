import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import questions from "./questions";

type SetAnswerPayloadType = { index: number; answer: boolean };

const javascriptSlice = createSlice({
  name: "javascript",
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

export const {
  setAnswer: setAnswerActionCreator,
  restAnswers: resetAnswerActionCreator,
} = javascriptSlice.actions;

export default javascriptSlice.reducer;
