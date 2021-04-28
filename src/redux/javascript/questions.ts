import { QuestionTypes, QBOOLEAN, QMULTIPLE_CHOICE } from "../types";

const questions: QuestionTypes[] = [
  {
    type: QMULTIPLE_CHOICE,
    title: "Which key word is used to desclare variale in javascript",
    answer: "let",
    options: [
      {
        key: "let",
        value: "let",
      },
      {
        key: "int",
        value: "int",
      },
      {
        key: "variable",
        value: "variable",
      },
    ],
    userAnswer: null,
  },
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
