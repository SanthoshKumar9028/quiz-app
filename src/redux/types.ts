export const QBOOLEAN = "QBOOLEAN";
export const QMULTIPLE_CHOICE = "QMULTIPLE_CHOICE";
export const QMULTI_SELECT_CHOICE = "QMULTI_SELECT_CHOICE";
export const QFILL_IN_BLANK = "QFILL_IN_BLANK";

export interface IBooleanQuestion {
  id: string;
  type: typeof QBOOLEAN;
  title: string;
  answer: boolean;
  userAnswer: null | boolean;
  mark?: number;
}

export interface IChoiceOption {
  key: string;
  value: string;
}
export interface IMultipleChoiceQuestion {
  id: string;
  type: typeof QMULTIPLE_CHOICE;
  title: string;
  options: IChoiceOption[];
  answer: string;
  userAnswer: null | string;
  mark?: number;
}

export interface IFillInBlankQuestion {
  id: string;
  type: typeof QFILL_IN_BLANK;
  title: string;
  answer: string;
  userAnswer: null | string;
  mark?: number;
}

export interface IMultiSelectQuestion {
  id: string;
  type: typeof QMULTI_SELECT_CHOICE;
  title: string;
  options: IChoiceOption[];
  answer: string[];
  userAnswer: null | string[];
  mark?: number;
}

export type QuestionTypes =
  | IBooleanQuestion
  | IMultipleChoiceQuestion
  | IFillInBlankQuestion
  | IMultiSelectQuestion;

export interface IState {
  user: {
    score: number;
  };
  javascript: { totalQuestions: number; questions: QuestionTypes[] };
  html: { totalQuestions: number; questions: QuestionTypes[] };
  css: { totalQuestions: number; questions: QuestionTypes[] };
  typescript: { totalQuestions: number; questions: QuestionTypes[] };
  python: { totalQuestions: number; questions: QuestionTypes[] };
  java: { totalQuestions: number; questions: QuestionTypes[] };
}
