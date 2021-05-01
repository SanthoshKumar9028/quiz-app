import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TiTick } from "react-icons/ti";
import { ImCross, ImInfo } from "react-icons/im";

import "./finalize-answer.scss";
import { resetAnswerActionCreator } from "../../redux/javascript";
import { language, allQuestionSelector } from "../../redux";
import BooleanQuiz from "../../components/boolean-quiz";
import MultiChoiceQuiz from "../../components/multi-choice-quiz";
import Header from "../../components/header";
import { incrementScoreByActionCreator } from "../../redux/user";

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
    (s, { answer, userAnswer, mark }) => {
      s.totalQuestions++;
      if (userAnswer === null) {
        s.ignoredQuestions++;
      } else if (answer === userAnswer) {
        s.score += mark ?? 1;
        s.correctQuestions++;
      } else {
        s.incorrectQuestions++;
      }
      return s;
    },
    {
      score: 0,
      totalQuestions: 0,
      correctQuestions: 0,
      ignoredQuestions: 0,
      incorrectQuestions: 0,
    }
  );

  useEffect(() => {
    dispatch(incrementScoreByActionCreator(stats.score));
    return () => void dispatch(resetAnswerActionCreator());
  }, []);

  return (
    <main className="finalize-answer">
      <Header />
      <section className="finalize-answer__stats">
        <div className="container">
          <h1 data-testid="total-questions">
            Total Questions
            <span className="quizs-nums">{stats.totalQuestions}</span>
          </h1>
          <h1 data-testid="correct-questions">
            Correct Questions
            <span className="quizs-nums">{stats.correctQuestions}</span>
          </h1>
          <h1 data-testid="incorrect-questions">
            Incorrect Questions
            <span className="quizs-nums">{stats.incorrectQuestions}</span>
          </h1>
          <h1 data-testid="ignored-questions">
            Ignored Questions
            <span className="quizs-nums">{stats.ignoredQuestions}</span>
          </h1>
        </div>
      </section>
      <ol className="finalize-answer__list container">
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
            <li key={question.title} className="finalize-answer__item">
              {comp}

              <div className="finalize-answer__status">
                Correct :{" "}
                {question.userAnswer === question.answer ? (
                  <TiTick className="finalize-answer__correct" />
                ) : (
                  <ImCross className="finalize-answer__wrong" />
                )}
              </div>

              {question.userAnswer !== question.answer && (
                <>
                  <div className="finalize-answer__status">
                    Correct Answer : {convertAnswer(question.answer)}
                  </div>

                  <div className="finalize-answer__status">
                    <ImInfo className="finalize-answer__info" />{" "}
                    {question.userAnswer === null
                      ? "You ignored this question."
                      : `Your Answer : ${convertAnswer(question.userAnswer)}`}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </main>
  );
}

export default FinalizeAnswer;
