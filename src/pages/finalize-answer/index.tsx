import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { TiTick, TiHome, TiDocument } from "react-icons/ti";
import { ImCross, ImInfo } from "react-icons/im";
import Modal from "react-modal";
import CountUp from "react-countup";

import "./finalize-answer.scss";
import {
  language,
  allQuestionSelector,
  resetAnswerActionCreator,
} from "../../redux";
import BooleanQuiz from "../../components/boolean-quiz";
import MultiChoiceQuiz from "../../components/multi-choice-quiz";
import FillInBlankQuiz from "../../components/fill-in-blank-quiz";
import Header from "../../components/header";
import { incrementScoreByActionCreator } from "../../redux/user";

export interface IFinalizeAnswerProps {
  language: language;
}

function convertAnswer(answer: any) {
  return String(answer);
}

const modalStyles = { content: { backgroundColor: "orange" } };

function FinalizeAnswer({ language }: IFinalizeAnswerProps) {
  const questions = useSelector(allQuestionSelector(language));
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);
  const openModel = () => setModalOpen(true);

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
    return () => void dispatch(resetAnswerActionCreator(language)());
  }, []);

  return (
    <main className="finalize-answer">
      <Header />
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeModal}
        style={modalStyles}
        ariaHideApp={false}
      >
        <button
          className="finalize-answer__modal-cls-btn"
          onClick={closeModal}
          data-testid="modal-cls-btn"
        >
          <ImCross />
        </button>
        <h2 className="finalize-answer__modal-title">FINAL RESULT</h2>
        <h2 className="finalize-answer__modal-title">
          SCORE ~ <CountUp end={stats.score} />
        </h2>
        <section className="finalize-answer__stats">
          <h3 data-testid="total-questions">
            Total Questions
            <span className="quizs-nums">{stats.totalQuestions}</span>
          </h3>
          <h3 data-testid="correct-questions">
            Correct Questions
            <span className="quizs-nums">{stats.correctQuestions}</span>
          </h3>
          <h3 data-testid="incorrect-questions">
            Incorrect Questions
            <span className="quizs-nums">{stats.incorrectQuestions}</span>
          </h3>
          <h3 data-testid="ignored-questions">
            Ignored Questions
            <span className="quizs-nums">{stats.ignoredQuestions}</span>
          </h3>
        </section>
      </Modal>
      <div className="finalize-answer__controls">
        <button
          title="go to home"
          data-testid="go-home-btn"
          onClick={() => history.replace("/")}
        >
          <TiHome size="1.5rem" />
        </button>
        <button
          title="view result"
          data-testid="modal-opn-btn"
          onClick={openModel}
        >
          <TiDocument size="1.5rem" />
        </button>
      </div>
      <ol className="finalize-answer__list container">
        {questions.map((question) => {
          let comp = null;
          if (question.type === "QBOOLEAN") {
            comp = (
              <BooleanQuiz
                status="answered"
                id={question.id}
                text={question.title}
                answer={question.answer}
              />
            );
          } else if (question.type === "QMULTIPLE_CHOICE") {
            comp = (
              <MultiChoiceQuiz
                status="answered"
                id={question.id}
                text={question.title}
                answer={question.answer}
                options={question.options}
              />
            );
          } else if (question.type === "QFILL_IN_BLANK") {
            comp = (
              <FillInBlankQuiz
                status="answered"
                id={question.id}
                text={question.title}
                answer={question.userAnswer}
              />
            );
          }
          return (
            <li key={question.id} className="finalize-answer__item">
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
