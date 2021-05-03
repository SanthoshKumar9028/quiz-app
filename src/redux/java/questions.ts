import { QuestionTypes, QBOOLEAN, QMULTIPLE_CHOICE } from "../types";

const questions: QuestionTypes[] = [
  {
    id: 10,
    type: QMULTIPLE_CHOICE,
    title: "Which of the following is not a Java features?",
    options: [
      {
        key: "Dynamic",
        value: "Dynamic",
      },
      {
        key: "Architecture Neutral",
        value: "Architecture Neutral",
      },
      {
        key: "Use of pointers",
        value: "Use of pointers",
      },
      {
        key: "Object-oriented",
        value: "Object-oriented",
      },
    ],
    answer: "Use of pointers",
    userAnswer: null,
  },
  {
    id: 20,
    type: QBOOLEAN,
    title: "Java files ends with an extention .java",
    answer: true,
    userAnswer: null,
  },
  {
    id: 30,
    type: QMULTIPLE_CHOICE,
    title:
      "What is the return type of the hashCode() method in the Object class?",
    options: [
      {
        key: "Object",
        value: "Object",
      },
      {
        key: "void",
        value: "void",
      },
      {
        key: "long",
        value: "long",
      },
      {
        key: "int",
        value: "int",
      },
    ],
    answer: "int",
    userAnswer: null,
  },
  {
    id: 40,
    type: QMULTIPLE_CHOICE,
    title: "_____ is used to find and fix bugs in the Java programs.",
    options: [
      {
        key: "JDB",
        value: "JDB",
      },
      {
        key: "JRE",
        value: "JRE",
      },
      {
        key: "JDK",
        value: "JDK",
      },
      {
        key: "JVM",
        value: "JVM",
      },
    ],
    answer: "JDB",
    userAnswer: null,
  },
  {
    id: 50,
    type: QBOOLEAN,
    title:
      "The default value of a static integer variable of a class in Java is 0",
    answer: true,
    userAnswer: null,
  },
  {
    id: 60,
    type: QMULTIPLE_CHOICE,
    title:
      "In which memory a String is stored, when we create a string using new operator?",
    options: [
      {
        key: "Stack",
        value: "Stack",
      },
      {
        key: "Heap Memory",
        value: "Heap Memory",
      },
      {
        key: "String Memory",
        value: "String Memory",
      },
      {
        key: "Random storage space",
        value: "Random storage space",
      },
    ],
    answer: "Heap Memory",
    userAnswer: null,
  },
  {
    id: 70,
    type: QMULTIPLE_CHOICE,
    title: "Which keyword is used for accessing the features of a package?",
    options: [
      {
        key: "export",
        value: "export",
      },
      {
        key: "import",
        value: "import",
      },
      {
        key: "package",
        value: "package",
      },
      {
        key: "extends",
        value: "extends",
      },
    ],
    answer: "import",
    userAnswer: null,
  },
  {
    id: 80,
    type: QMULTIPLE_CHOICE,
    title: "In java, jar stands for",
    options: [
      {
        key: "Java Archive Runner",
        value: "Java Archive Runner",
      },
      {
        key: "Java Application Runner",
        value: "Java Application Runner",
      },
      {
        key: "None of the mentioned",
        value: "None of the mentioned",
      },
      {
        key: "Java Application Resource",
        value: "Java Application Resource",
      },
    ],
    answer: "None of the mentioned",
    userAnswer: null,
  },
  {
    id: 90,
    type: QMULTIPLE_CHOICE,
    title: "Which of the following is a mutable class in java?",
    options: [
      {
        key: "java.lang.String",
        value: "java.lang.String",
      },
      {
        key: "java.lang.Byte",
        value: "java.lang.Byte",
      },
      {
        key: "java.lang.StringBuilder",
        value: "java.lang.StringBuilder",
      },
      {
        key: "java.lang.Short",
        value: "java.lang.Short",
      },
    ],
    answer: "java.lang.StringBuilder",
    userAnswer: null,
  },
  {
    id: 100,
    type: QMULTIPLE_CHOICE,
    title:
      "Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?",
    options: [
      {
        key: "let",
        value: "let",
      },
      {
        key: "transient",
        value: "transient",
      },
      {
        key: "volatile",
        value: "volatile",
      },
      {
        key: "global",
        value: "global",
      },
    ],
    answer: "volatile",
    userAnswer: null,
  },
];

export default questions;
