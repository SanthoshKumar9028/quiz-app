import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./test-quizs.scss";
import {
  questionSelector,
  questionLengthSelector,
  setAnswerActionCreator,
  language,
} from "../../redux";
import Header from "../../components/header";
import BooleanQuiz from "../../components/boolean-quiz";
import FinalizeAnswer from "../finalize-answer";
import MultiChoiceQuiz from "../../components/multi-choice-quiz";
import FillInBlankQuiz from "../../components/fill-in-blank-quiz";

function TestQuizs({ language }: { language: language }) {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const question = useSelector(questionSelector(language, questionNumber));
  const totalQuestions = useSelector(questionLengthSelector(language));
  const dispatch = useDispatch();

  const goToNextQuestion = () => {
    setQuestionNumber((prv) => prv + 1);
  };

  if (questionNumber >= totalQuestions) {
    return <FinalizeAnswer language={language} />;
  }

  const handleAnswerChange = (answer: any) => {
    const setAnswer = setAnswerActionCreator(language);

    dispatch(setAnswer({ index: questionNumber, answer }));
  };

  let comp = null;
  if (question.type === "QBOOLEAN") {
    comp = (
      <BooleanQuiz
        status="unanswered"
        id={question.id}
        text={question.title}
        answer={question.userAnswer}
        handleAnswerChange={handleAnswerChange}
      />
    );
  } else if (question.type === "QMULTIPLE_CHOICE") {
    comp = (
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
    comp = (
      <FillInBlankQuiz
        status="unanswered"
        id={question.id}
        text={question.title}
        answer={question.userAnswer}
        handleAnswerChange={handleAnswerChange}
      />
    );
  }

  return (
    <main className="test-quiz">
      <Header />
      <section className="test-quiz__question container">
        {comp}
        <button className="test-quiz__next-btn" onClick={goToNextQuestion}>
          NEXT
        </button>
      </section>
    </main>
  );
}

export default TestQuizs;
