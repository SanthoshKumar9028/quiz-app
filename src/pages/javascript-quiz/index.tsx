import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setAnswerActionCreator,
  questionSelector,
  questionLengthSelector,
} from "../../redux/javascript";
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
    <div>
      {comp}
      <button onClick={goToNextQuestion}>NEXT</button>
    </div>
  );
}

export default JavaScriptQuizs;
