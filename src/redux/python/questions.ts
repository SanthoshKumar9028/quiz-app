import {
  QuestionTypes,
  QBOOLEAN,
  QMULTIPLE_CHOICE,
  QMULTI_SELECT_CHOICE,
} from "../types";

const questions: QuestionTypes[] = [
  {
    id: 10,
    type: QMULTIPLE_CHOICE,
    title: "Python is a",
    options: [
      {
        key: "High-level programming language",
        value: "High-level programming language",
      },
      {
        key: "Low-level scripting language",
        value: "Low-level scripting language",
      },
      {
        key: "High-level scripting language",
        value: "High-level scripting language",
      },
      {
        key: "Middle-level programming language",
        value: "Middle-level programming language",
      },
    ],
    answer: "High-level scripting language",
    userAnswer: null,
  },
  {
    id: 15,
    type: QMULTI_SELECT_CHOICE,
    title: "Select valid data types",
    options: [
      {
        key: "int",
        value: "int",
      },
      {
        key: "str",
        value: "str",
      },
      {
        key: "double",
        value: "double",
      },
      {
        key: "char",
        value: "char",
      },
    ],
    answer: ["int", "str"],
    userAnswer: null,
  },
  {
    id: 20,
    type: QMULTIPLE_CHOICE,
    title: "Which one of the following has the same precedence level?",
    options: [
      {
        key: "Subtraction and Division",
        value: "Subtraction and Division",
      },
      {
        key: "Power and Division",
        value: "Power and Division",
      },
      {
        key: "Power and Subtraction",
        value: "Power and Subtraction",
      },
      {
        key: "Division and Multiplication",
        value: "Division and Multiplication",
      },
    ],
    answer: "Division and Multiplication",
    userAnswer: null,
  },
  {
    id: 30,
    type: QMULTIPLE_CHOICE,
    title:
      "Which of the following words cannot be used as a variable name in python?",
    options: [
      {
        key: "var",
        value: "var",
      },
      {
        key: "_try_",
        value: "_try_",
      },
      {
        key: "_var",
        value: "_var",
      },
      {
        key: "try",
        value: "try",
      },
    ],
    answer: "try",
    userAnswer: null,
  },
  {
    id: 40,
    type: QBOOLEAN,
    title: "Set members must not be hashable.",
    answer: false,
    userAnswer: null,
  },
  {
    id: 50,
    type: QMULTIPLE_CHOICE,
    title: "Which of the following is not a keyword in Python language?",
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
  },
  {
    id: 60,
    type: QBOOLEAN,
    title: "Lambda is a statement.",
    answer: false,
    userAnswer: null,
  },
  {
    id: 70,
    type: QMULTIPLE_CHOICE,
    title: "What is the maximum possible length of an identifier?",
    options: [
      {
        key: "79 characters",
        value: "79 characters",
      },
      {
        key: "35 characters",
        value: "35 characters",
      },
      {
        key: "22 characters",
        value: "22 characters",
      },
      {
        key: "none of the mentioned",
        value: "none of the mentioned",
      },
    ],
    answer: "none of the mentioned",
    userAnswer: null,
  },
  {
    id: 80,
    type: QBOOLEAN,
    title: "Python supports multi-line comments",
    answer: false,
    userAnswer: null,
  },
  {
    id: 90,
    type: QMULTIPLE_CHOICE,
    title: "What is the method inside the class in python language?",
    options: [
      {
        key: "Function",
        value: "Function",
      },
      {
        key: "Object",
        value: "Object",
      },
      {
        key: "Argument",
        value: "Argument",
      },
      {
        key: "Attribute",
        value: "Attribute",
      },
    ],
    answer: "Function",
    userAnswer: null,
  },
  {
    id: 100,
    type: QMULTIPLE_CHOICE,
    title: "The format function, when it applied on a string returns",
    options: [
      {
        key: "int",
        value: "int",
      },
      {
        key: "bool",
        value: "bool",
      },
      {
        key: "str",
        value: "str",
      },
      {
        key: "error",
        value: "error",
      },
    ],
    answer: "str",
    userAnswer: null,
  },
];

export default questions;
