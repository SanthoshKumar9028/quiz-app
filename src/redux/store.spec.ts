import { createStore } from "@reduxjs/toolkit";

import { reducer } from ".";
import { setAnswerActionCreator, resetAnswerActionCreator } from "./javascript";
import { incrementScoreByActionCreator } from "./user";

describe("redux store", () => {
  const store = createStore(reducer);

  it("should increment user score by 10", () => {
    store.dispatch(incrementScoreByActionCreator(10));
    expect(store.getState().user.score).toBe(10);
  });

  describe("javascript questions", () => {
    it("should set answer to js question", () => {
      store.dispatch(setAnswerActionCreator({ index: 0, answer: true }));
      expect(store.getState().javascript.questions[0].userAnswer).toBe(true);
    });

    it("should rest all the js questions", () => {
      store.dispatch(resetAnswerActionCreator());
      const receivedQs = store
        .getState()
        .javascript.questions.map((q) => q.userAnswer);
      expect(receivedQs.every((q) => q === null)).toBe(true);
    });
  });
});
