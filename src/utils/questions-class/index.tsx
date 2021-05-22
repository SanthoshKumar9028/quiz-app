import { QuestionTypes } from "../../redux/types";
import BooleanQuiz from "../../components/boolean-quiz";
import MultiChoiceQuiz from "../../components/multi-choice-quiz";
import FillInBlankQuiz from "../../components/fill-in-blank-quiz";
import MultiSelectQuiz from "../../components/multi-select-quiz";

class Question {
  static renderInAnsweredMode(
    question: QuestionTypes,
    args?: {}
  ): React.ReactNode {
    if (question.type === "QBOOLEAN") {
      return (
        <BooleanQuiz
          status="answered"
          id={question.id}
          text={question.title}
          answer={question.answer}
        />
      );
    } else if (question.type === "QMULTIPLE_CHOICE") {
      return (
        <MultiChoiceQuiz
          status="answered"
          id={question.id}
          text={question.title}
          answer={question.answer}
          options={question.options}
        />
      );
    } else if (question.type === "QFILL_IN_BLANK") {
      return (
        <FillInBlankQuiz
          status="answered"
          id={question.id}
          text={question.title}
          answer={question.answer}
        />
      );
    } else if (question.type === "QMULTI_SELECT_CHOICE") {
      return (
        <MultiSelectQuiz
          status="answered"
          id={question.id}
          text={question.title}
          answer={question.answer}
          options={question.options}
        />
      );
    }
  }
  static renderInUnAnsweredMode(
    question: QuestionTypes,
    { handleAnswerChange }: { handleAnswerChange: (a: any) => void }
  ): React.ReactNode {
    if (question.type === "QBOOLEAN") {
      return (
        <BooleanQuiz
          status="unanswered"
          id={question.id}
          text={question.title}
          answer={question.userAnswer}
          handleAnswerChange={handleAnswerChange}
        />
      );
    } else if (question.type === "QMULTIPLE_CHOICE") {
      return (
        <MultiChoiceQuiz
          status="unanswered"
          id={question.id}
          text={question.title}
          answer={question.userAnswer}
          options={question.options}
          handleAnswerChange={handleAnswerChange}
        />
      );
    } else if (question.type === "QFILL_IN_BLANK") {
      return (
        <FillInBlankQuiz
          status="unanswered"
          id={question.id}
          text={question.title}
          answer={question.userAnswer}
          handleAnswerChange={handleAnswerChange}
        />
      );
    } else if (question.type === "QMULTI_SELECT_CHOICE") {
      return (
        <MultiSelectQuiz
          status="unanswered"
          id={question.id}
          text={question.title}
          answer={question.userAnswer}
          options={question.options}
          handleAnswerChange={handleAnswerChange}
        />
      );
    }
  }
  static isCorrect(question: QuestionTypes): boolean {
    if (question.type === "QMULTI_SELECT_CHOICE") {
      if (question.answer.length !== question.userAnswer?.length) {
        return false;
      }
      for (let answer of question.answer) {
        if (!question.userAnswer?.includes(answer)) {
          return false;
        }
      }
      return true;
    } else {
      // for all other types questions
      return question.userAnswer === question.answer;
    }
  }

  static isNotAnswered(question: QuestionTypes): boolean {
    return question.userAnswer === null;
  }
}

export { Question };
