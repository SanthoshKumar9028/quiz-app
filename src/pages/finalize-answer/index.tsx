import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { resetAnswerActionCreator } from "../../redux/javascript";
import { language, allQuestionSelector } from "../../redux";
import BooleanQuiz from "../../components/boolean-quiz";
import MultiChoiceQuiz from "../../components/multi-choice-quiz";

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
        {questions.map((question) => {
          let comp = null;
          if (question.type === "QBOOLEAN") {
            comp = (
              <BooleanQuiz
                status="answered"
                text={question.title}
                answer={question.answer}
              />
            );
          } else if (question.type === "QMULTIPLE_CHOICE") {
            comp = (
              <MultiChoiceQuiz
                status="answered"
                text={question.title}
                answer={question.answer}
                options={question.options}
              />
            );
          }
          return (
            <li key={question.title}>
              {comp}
              <span>
                Correct :
                {question.userAnswer === question.answer ? "Yes" : "No"}
              </span>
              {question.userAnswer !== question.answer && (
                <div>
                  <span>Correct Answer : {convertAnswer(question.answer)}</span>
                  <span>
                    {question.userAnswer === null
                      ? "You Skipped this question"
                      : `Your Answer ${convertAnswer(question.userAnswer)}`}
                  </span>
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
