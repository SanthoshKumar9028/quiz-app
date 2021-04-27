import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { resetAnswerActionCreator } from "../../redux/javascript";
import { language, allQuestionSelector } from "../../redux";
import Quiz from "../../components/quiz";

export interface IFinalizeAnswerProps {
  language: language;
}

function convertAnswer(answer: any) {
  return String(answer);
}

function FinalizeAnswer({ language }: IFinalizeAnswerProps) {
  const questions = useSelector(allQuestionSelector(language));
  const dispatch = useDispatch();

  const stats = questions.reduce(
    (s, { answer, userAnswer }) => {
      s.totalQuestions++;
      if (userAnswer === null) {
        s.skipedQuestions++;
      } else if (answer === userAnswer) {
        s.correctQuestions++;
      } else {
        s.incorrectQuestions++;
      }
      return s;
    },
    {
      totalQuestions: 0,
      correctQuestions: 0,
      skipedQuestions: 0,
      incorrectQuestions: 0,
    }
  );

  useEffect(() => {
    return () => void dispatch(resetAnswerActionCreator());
  }, [dispatch]);

  return (
    <div>
      <section>
        <h1>Total Questions : {stats.totalQuestions}</h1>
        <span>Correct Questions : {stats.correctQuestions} </span>
        <span>Incorrect Questions : {stats.incorrectQuestions} </span>
        <span>Skiped Questions : {stats.skipedQuestions} </span>
      </section>
      <ol>
        {questions.map(({ type, title, userAnswer, answer }) => {
          return (
            <li key={title}>
              <Quiz
                type={type}
                rest={{
                  status: "answered",
                  text: title,
                  answer: userAnswer,
                }}
              />
              <span>Correct : {userAnswer === answer ? "Yes" : "No"}</span>
              {(userAnswer === null || userAnswer !== answer) && (
                <div>
                  <span>Correct Answer : {convertAnswer(answer)} </span>
                  <span> Your Answer {convertAnswer(userAnswer)} </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default FinalizeAnswer;
