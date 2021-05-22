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
import FinalizeAnswer from "../finalize-answer";
import { Question } from "../../utils/questions-class";

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

  return (
    <main className="test-quiz">
      <Header />
      <section className="test-quiz__question container">
        {Question.renderInUnAnsweredMode(question, { handleAnswerChange })}
        <button className="test-quiz__next-btn" onClick={goToNextQuestion}>
          NEXT
        </button>
      </section>
    </main>
  );
}

export default TestQuizs;
