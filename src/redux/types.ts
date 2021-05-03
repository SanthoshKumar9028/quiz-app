export const QBOOLEAN = "QBOOLEAN";
export const QMULTIPLE_CHOICE = "QMULTIPLE_CHOICE";
export const QMULTI_SELECT_CHOICE = "QMULTI_SELECT_CHOICE";
export const QFILL_IN_BLANK = "QFILL_IN_BLANK";

export interface IBooleanQuestion {
  id: number;
  type: typeof QBOOLEAN;
  title: string;
  answer: boolean;
  userAnswer: null | boolean;
  mark?: number;
}

export interface IMultipleChoiceOption {
  key: string;
  value: string;
}
export interface IMultipleChoiceQuestion {
  id: number;
  type: typeof QMULTIPLE_CHOICE;
  title: string;
  options: IMultipleChoiceOption[];
  answer: string;
  userAnswer: null | string;
  mark?: number;
}

export type QuestionTypes = IBooleanQuestion | IMultipleChoiceQuestion;

export interface IState {
  user: {
    score: number;
  };
  javascript: { totalQuestions: number; questions: QuestionTypes[] };
  html: { totalQuestions: number; questions: QuestionTypes[] };
}
