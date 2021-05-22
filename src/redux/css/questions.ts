import {
  QuestionTypes,
  QBOOLEAN,
  QMULTIPLE_CHOICE,
  QFILL_IN_BLANK,
  QMULTI_SELECT_CHOICE,
} from "../types";
import genQuniqueId from "../../utils/gen-unique-id";

const questions: QuestionTypes[] = [
  {
    id: genQuniqueId(),
    type: QMULTI_SELECT_CHOICE,
    title: "Select valid properties",
    options: [
      {
        key: "color",
        value: "color",
      },
      {
        key: "text-align",
        value: "text-align",
      },
      {
        key: "font-color",
        value: "font-color",
      },
      {
        key: "background",
        value: "background",
      },
    ],
    answer: ["color", "text-align", "background"],
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "CSS stands for",
    options: [
      {
        key: "Cascading Style Sheet",
        value: "Cascading Style Sheet",
      },
      {
        key: "Costly Style Sheet",
        value: "Costly Style Sheet",
      },
      {
        key: "Condition Stands Style",
        value: "Condition Stands Style",
      },
      {
        key: "None of them",
        value: "None of them",
      },
    ],
    answer: "Cascading Style Sheet",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which property is used to change the color of the text",
    options: [
      {
        key: "color",
        value: "color",
      },
      {
        key: "text-color",
        value: "text-color",
      },
      {
        key: "font-color",
        value: "font-color",
      },
      {
        key: "colors",
        value: "colors",
      },
    ],
    answer: "color",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QFILL_IN_BLANK,
    title: "In CSS, ID of an element starts with",
    answer: "#",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which HTML tage is used to add style?",
    options: [
      {
        key: "htmlstyle",
        value: "htmlstyle",
      },
      {
        key: "css",
        value: "css",
      },
      {
        key: "style",
        value: "style",
      },
      {
        key: "None of them",
        value: "None of them",
      },
    ],
    answer: "style",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "margin properties can accept negative values.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title:
      "Which place is prefered by the community to add styles in HTML document?",
    options: [
      {
        key: "head",
        value: "head",
      },
      {
        key: "body",
        value: "body",
      },
      {
        key: "both",
        value: "both",
      },
    ],
    answer: "head",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "Which tag is used to link the external style sheets",
    options: [
      {
        key: "css",
        value: "css",
      },
      {
        key: "link",
        value: "link",
      },
      {
        key: "embbedcss",
        value: "embbedcss",
      },
      {
        key: "linkcss",
        value: "linkcss",
      },
    ],
    answer: "link",
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "A website can have only one external style sheet",
    answer: false,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "We can use variables in style sheet.",
    answer: true,
    userAnswer: null,
  },
  {
    id: genQuniqueId(),
    type: QMULTIPLE_CHOICE,
    title: "What are the values can be used in position property?",
    options: [
      {
        key: "absolute",
        value: "absolute",
      },
      {
        key: "fixed",
        value: "fixed",
      },
      {
        key: "relative",
        value: "relative",
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
    id: genQuniqueId(),
    type: QBOOLEAN,
    title: "Styles of an HTML element can be changed by JavaScript.",
    answer: true,
    userAnswer: null,
  },
];

export default questions;
