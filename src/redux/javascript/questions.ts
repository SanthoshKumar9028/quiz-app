import { QuestionTypes, QBOOLEAN } from "../types";

const questions: QuestionTypes[] = [
  {
    type: QBOOLEAN,
    title: "JavaScript is a case sencitive language.",
    answer: true,
    userAnswer: null,
  },
  {
    type: QBOOLEAN,
    title: "JavaScript does not support int data type.",
    answer: true,
    userAnswer: null,
  },
  {
    type: QBOOLEAN,
    title: "JavaScript will not run on browsers.",
    answer: false,
    userAnswer: null,
  },
  {
    type: QBOOLEAN,
    title: "Variables desclared with 'const' keyword, can change it's value.",
    answer: false,
    userAnswer: null,
  },
];

export default questions;
