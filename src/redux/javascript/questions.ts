import { QuestionTypes, QBOOLEAN, QMULTIPLE_CHOICE } from "../types";

const questions: QuestionTypes[] = [
  {
    id: 10,
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
    id: 20,
    type: QBOOLEAN,
    title: "JavaScript is a case sensitive language.",
    answer: true,
    userAnswer: null,
  },
  {
    id: 30,
    type: QBOOLEAN,
    title: "JavaScript does not support int data type.",
    answer: true,
    userAnswer: null,
  },
  {
    id: 40,
    type: QBOOLEAN,
    title: "JavaScript will not run on browsers.",
    answer: false,
    userAnswer: null,
  },
  {
    id: 50,
    type: QBOOLEAN,
    title: "Variables desclared with 'const' keyword, can change it's value.",
    answer: false,
    userAnswer: null,
  },
  {
    id: 60,
    type: QMULTIPLE_CHOICE,
    title: "What are the primitive data types javascript supports?",
    options: [
      {
        key: "Number",
        value: "Number",
      },
      {
        key: "String",
        value: "String",
      },
      {
        key: "Boolean",
        value: "Boolean",
      },
      {
        key: "All of them",
        value: "All of them",
      },
    ],
    answer: "All of them",
    userAnswer: null,
  },
  {
    id: 70,
    type: QMULTIPLE_CHOICE,
    title: "Which tag is used to embbed javascript in HTML?",
    options: [
      {
        key: "script",
        value: "script",
      },
      {
        key: "javascript",
        value: "javascript",
      },
      {
        key: "js",
        value: "js",
      },
    ],
    answer: "script",
    userAnswer: null,
  },
  {
    id: 80,
    type: QBOOLEAN,
    title: "JavaScript don't have the ability to access HTML elements.",
    answer: false,
    userAnswer: null,
  },
  {
    id: 90,
    type: QMULTIPLE_CHOICE,
    title: "Which symbol is used to access the property from an object?",
    options: [
      {
        key: "->",
        value: "->",
      },
      {
        key: ".",
        value: ".",
      },
      {
        key: "*",
        value: "*",
      },
      {
        key: "=>",
        value: "=>",
      },
    ],
    answer: ".",
    userAnswer: null,
  },
  {
    id: 100,
    type: QMULTIPLE_CHOICE,
    title: "Which is not the valid keyword in javascript?",
    options: [
      {
        key: "let",
        value: "let",
      },
      {
        key: "goto",
        value: "goto",
      },
      {
        key: "for",
        value: "for",
      },
      {
        key: "case",
        value: "case",
      },
    ],
    answer: "goto",
    userAnswer: null,
  },
];

export default questions;
