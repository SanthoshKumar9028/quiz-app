import { QuestionTypes, QBOOLEAN, QMULTIPLE_CHOICE } from "../types";
import genUniqueId from "../../utils/gen-unique-id";

const questions: QuestionTypes[] = [
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which are the different Data Types supported by Typescript?",
    options: [
      {
        key: "boolean",
        value: "boolean",
      },
      {
        key: "float",
        value: "float",
      },
      {
        key: "char",
        value: "char",
      },
      {
        key: "None of them",
        value: "None of them",
      },
    ],
    answer: "boolean",
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QBOOLEAN,
    title:
      "The preserve mode will keep the JSX as part of the output to be further consumed by another transform step.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "What are the variable scopes available in TypeScript?",
    options: [
      {
        key: "global scope",
        value: "global scope",
      },
      {
        key: "local scope",
        value: "local scope",
      },
      {
        key: "all of them",
        value: "all of them",
      },
      {
        key: "class scope",
        value: "class scope",
      },
    ],
    answer: "all of them",
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which object oriented terms are supported by Typescript?",
    options: [
      {
        key: "modules",
        value: "modules",
      },
      {
        key: "classes",
        value: "classes",
      },
      {
        key: "interfaces",
        value: "interfaces",
      },
      {
        key: "all of them",
        value: "all of them",
      },
    ],
    answer: "all of them",
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "When was the first time TypeScript was made public?",
    options: [
      {
        key: "December 2012",
        value: "December 2012",
      },
      {
        key: "October 2013",
        value: "October 2013",
      },
      {
        key: "October 2012",
        value: "October 2012",
      },
      {
        key: "December 2013",
        value: "December 2013",
      },
    ],
    answer: "October 2012",
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QBOOLEAN,
    title:
      "TypeScript supports public, protected and private access modifiers.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which one is the correct TypeScript file extention?",
    options: [
      {
        key: "tj",
        value: "tj",
      },
      {
        key: "ts",
        value: "ts",
      },
      {
        key: "js",
        value: "js",
      },
      {
        key: "tt",
        value: "tt",
      },
    ],
    answer: "ts",
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which one is the correct way to specify data type?",
    options: [
      {
        key: "var datatype: var_name;",
        value: "var datatype: var_name;",
      },
      {
        key: "var var_name: datatype;",
        value: "var var_name: datatype;",
      },
      {
        key: "none of them",
        value: "none of them",
      },
    ],
    answer: "var var_name: datatype;",
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QBOOLEAN,
    title: "TypeScript supports 'any' datatype.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genUniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "TypeScript is compiled into which of the follwing language?",
    options: [
      {
        key: "java",
        value: "java",
      },
      {
        key: "c",
        value: "c",
      },
      {
        key: "javascript",
        value: "javascript",
      },
      {
        key: "kotlin",
        value: "kotlin",
      },
    ],
    answer: "javascript",
    userAnswer: null,
  },
];

export default questions;
