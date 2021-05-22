import {
  QuestionTypes,
  QBOOLEAN,
  QMULTIPLE_CHOICE,
  QFILL_IN_BLANK,
} from "../types";
import genUniqueId from "../../utils/gen-unique-id";

const questions: QuestionTypes[] = [
  {
    id: genUniqueId(),
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
    id: genUniqueId(),
    type: QBOOLEAN,
    title: "JavaScript is a case sensitive language.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QBOOLEAN,
    title: "JavaScript does not support int data type.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QBOOLEAN,
    title: "JavaScript will not run on browsers.",
    answer: false,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QBOOLEAN,
    title: "Variables desclared with 'const' keyword, can change it's value.",
    answer: false,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
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
    id: genUniqueId(),
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
    id: genUniqueId(),
    type: QBOOLEAN,
    title: "JavaScript don't have the ability to access HTML elements.",
    answer: false,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
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
    id: genUniqueId(),
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
  {
    id: genUniqueId(),
    type: QFILL_IN_BLANK,
    title:
      "Type only the function name which is used to call a function repeatedly in a fixed interval time.",
    answer: "setInterval",
    userAnswer: null,
  },
];

export default questions;
