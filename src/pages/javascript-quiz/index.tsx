import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setAnswerActionCreator,
  questionSelector,
  questionLengthSelector,
} from "../../redux/javascript";
import Quiz from "../../components/quiz";
import FinalizeAnswer from "../finalize-answer";

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

  return (
    <div>
      <Quiz
        type={question.type}
        rest={{
          status: "unanswered",
          text: question.title,
          answer: question.userAnswer,
          handleAnswerChange(answer) {
            dispatch(setAnswerActionCreator({ index: questionNumber, answer }));
          },
        }}
      />
      <button onClick={goToNextQuestion}>NEXT</button>
    </div>
  );
}

export default JavaScriptQuizs;
