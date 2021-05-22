import {
  QuestionTypes,
  QBOOLEAN,
  QMULTIPLE_CHOICE,
  QFILL_IN_BLANK,
} from "../types";
import genQuniqueId from "../../utils/gen-unique-id";

const questions: QuestionTypes[] = [
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which tag is used to create an ordered list?",
    answer: "<ol>",
    options: [
      {
        key: "<ol>",
        value: "<ol>",
      },
      {
        key: "<ul>",
        value: "<ul>",
      },
      {
        key: "<el>",
        value: "<el>",
      },
    ],
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "The onclick is an event attribute of HTML.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title:
      "When assigning a value to both width and height attributes for an <img>, the value must be followed by 'px' for pixel units. Otherwise the unit will be 'cm'.",
    answer: false,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "HTML stands for",
    options: [
      {
        key: "Hyper Transform Model Language",
        value: "Hyper Transform Model Language",
      },
      {
        key: "Hyper Text Markup Language",
        value: "Hyper Text Markup Language",
      },
      {
        key: "High Text Markup Language",
        value: "High Text Markup Language",
      },
      {
        key: "Hidden Text Markup Language",
        value: "Hidden Text Markup Language",
      },
    ],
    answer: "Hyper Text Markup Language",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title:
      "The <canvas> element can be referred by JavaScript by the id attribute.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "HTML is a programming language.",
    answer: false,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "How many headings present in HTML",
    options: [
      {
        key: "2",
        value: "2",
      },
      {
        key: "6",
        value: "6",
      },
      {
        key: "10",
        value: "10",
      },
    ],
    answer: "6",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "We can't add an ID attribute to <body>.",
    answer: false,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QFILL_IN_BLANK,
    title: "HTML comments starts with <!-- and ends with",
    answer: "-->",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title:
      "The 'r', 'cx', 'cy' and 'fill' are all attributes of which of the follwing tags?",
    options: [
      {
        key: "circle",
        value: "circle",
      },
      {
        key: "svg",
        value: "svg",
      },
      {
        key: "sphere",
        value: "sphere",
      },
      {
        key: "canvas",
        value: "canvas",
      },
    ],
    answer: "circle",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which tag is used to make the text bold?",
    options: [
      {
        key: "em",
        value: "em",
      },
      {
        key: "b",
        value: "b",
      },
      {
        key: "p",
        value: "p",
      },
      {
        key: "a",
        value: "a",
      },
    ],
    answer: "b",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which is a valid syntax for starting tage?",
    options: [
      {
        key: "<body",
        value: "<body",
      },
      {
        key: "body>",
        value: "body>",
      },
      {
        key: "</body>",
        value: "</body>",
      },
      {
        key: "<body>",
        value: "<body>",
      },
    ],
    answer: "<body>",
    userAnswer: null,
  },
];

export default questions;
