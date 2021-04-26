export const QBOOLEAN = "QBOOLEAN";
export const QMULTIPLE_CHOICE = "QMULTIPLE_CHOICE";
export const QMULTI_SELECT_CHOICE = "QMULTI_SELECT_CHOICE";
export const QFILL_IN_BLANK = "QFILL_IN_BLANK";

export interface IBooleanQuestion {
  type: typeof QBOOLEAN;
  title: string;
  answer: boolean;
  userAnswer: null | boolean;
}

export type QuestionTypes = IBooleanQuestion;

export interface IState {
  user: {
    score: number;
  };
  javascript: QuestionTypes[];
}
