import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./javascript-quiz.scss";
import {
  setAnswerActionCreator,
  questionSelector,
  questionLengthSelector,
} from "../../redux/javascript";
import Header from "../../components/header";
import BooleanQuiz from "../../components/boolean-quiz";
import FinalizeAnswer from "../finalize-answer";
import MultiChoiceQuiz from "../../components/multi-choice-quiz";

function JavaScriptQuizs() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const question = useSelector(questionSelector(questionNumber));
  const totalQuestions = useSelector(questionLengthSelector);
  const dispatch = useDispatch();

  const goToNextQuestion = () => {
    setQuestionNumber((prv) => prv + 1);
  };

  if (questionNumber >= totalQuestions) {
    return <FinalizeAnswer language="javascript" />;
  }

  const handleAnswerChange = (answer: any) => {
    dispatch(setAnswerActionCreator({ index: questionNumber, answer }));
  };

  let comp = null;
  if (question.type === "QBOOLEAN") {
    comp = (
      <BooleanQuiz
        status="unanswered"
        text={question.title}
        answer={question.userAnswer}
        handleAnswerChange={handleAnswerChange}
      />
    );
  } else if (question.type === "QMULTIPLE_CHOICE") {
    comp = (
      <MultiChoiceQuiz
        status="unanswered"
        text={question.title}
        answer={question.userAnswer}
        options={question.options}
        handleAnswerChange={handleAnswerChange}
      />
    );
  }

  return (
    <main className="javascript-quiz">
      <Header />
      <section className="javascript-quiz__question container">
        {comp}
        <button
          className="javascript-quiz__next-btn"
          onClick={goToNextQuestion}
        >
          NEXT
        </button>
      </section>
    </main>
  );
}

export default JavaScriptQuizs;
