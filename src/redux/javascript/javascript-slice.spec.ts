import reducer, {
  setAnswerActionCreator,
  resetAnswerActionCreator,
} from "./index";
import questions from "./questions";

describe("javascript slice", () => {
  const state = {
    totalQuestions: questions.length,
    questions,
  };

  it("should not set answer to the store", () => {
    const received = reducer(
      state,
      setAnswerActionCreator({ index: questions.length + 10, answer: true })
    ).questions.map((q) => q.userAnswer);

    expect(received.every((question) => question == null)).toBe(true);
  });

  it("should set answer to the store", () => {
    //changing the first question answer
    const question = reducer(
      state,
      setAnswerActionCreator({ index: 0, answer: false })
    ).questions[0];

    expect(question.userAnswer).toBe(false);
  });

  it("should reset all answers in the store", () => {
    //changing the first question answer
    const questions = reducer(state, resetAnswerActionCreator()).questions.map(
      (question) => question.userAnswer
    );

    expect(questions.every((question) => question == null)).toBe(true);
  });
});
