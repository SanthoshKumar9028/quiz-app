import { Question } from ".";
import {
  IBooleanQuestion,
  IFillInBlankQuestion,
  IMultiSelectQuestion,
  IMultipleChoiceQuestion,
  QBOOLEAN,
  QFILL_IN_BLANK,
  QMULTIPLE_CHOICE,
  QMULTI_SELECT_CHOICE,
} from "../../redux/types";

describe("question class", () => {
  it("should work on boolean type queston", () => {
    const question: IBooleanQuestion = {
      id: "1",
      type: QBOOLEAN,
      title: "test boolean question title.",
      answer: true,
      userAnswer: null,
    };
    expect(Question.isNotAnswered(question)).toBe(true);
    question.userAnswer = false;
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = true;
    expect(Question.isNotAnswered(question)).toBe(false);
    expect(Question.isCorrect(question)).toBe(true);
  });
  it("should work on fill-in-blank type queston", () => {
    const question: IFillInBlankQuestion = {
      id: "1",
      type: QFILL_IN_BLANK,
      title: "test fill-in-blank question title",
      answer: "test",
      userAnswer: null,
    };
    expect(Question.isNotAnswered(question)).toBe(true);
    question.userAnswer = "something";
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = "test";
    expect(Question.isNotAnswered(question)).toBe(false);
    expect(Question.isCorrect(question)).toBe(true);
  });
  it("should work on multiple-choice type queston", () => {
    const question: IMultipleChoiceQuestion = {
      id: "1",
      type: QMULTIPLE_CHOICE,
      title: "test multiple question title.",
      options: [
        {
          key: "with",
          value: "with",
        },
        {
          key: "val",
          value: "val",
        },
        {
          key: "try",
          value: "try",
        },
        {
          key: "if",
          value: "if",
        },
      ],
      answer: "val",
      userAnswer: null,
    };
    expect(Question.isNotAnswered(question)).toBe(true);
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = "with";
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = "val";
    expect(Question.isNotAnswered(question)).toBe(false);
    expect(Question.isCorrect(question)).toBe(true);
  });
  it("should work on multiple-select type queston", () => {
    const question: IMultiSelectQuestion = {
      id: "1",
      type: QMULTI_SELECT_CHOICE,
      title: "test multiple-select title",
      options: [
        {
          key: "test1",
          value: "test1",
        },
        {
          key: "test2",
          value: "test2",
        },
        {
          key: "test3",
          value: "test3",
        },
        {
          key: "not a test",
          value: "not a test",
        },
      ],
      answer: ["test1", "test2", "test3"],
      userAnswer: null,
    };
    expect(Question.isNotAnswered(question)).toBe(true);
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = ["test1"];
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = ["test1", "test2", "test3", "not a test"];
    expect(Question.isCorrect(question)).toBe(false);
    question.userAnswer = ["test1", "test2", "test3"];
    expect(Question.isNotAnswered(question)).toBe(false);
    expect(Question.isCorrect(question)).toBe(true);
  });
});

export {};
