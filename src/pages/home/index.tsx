import { Link } from "react-router-dom";
import { MdAssignment } from "react-icons/md";

import "./home.scss";
import Header from "../../components/header";

function Home() {
  return (
    <main className="home">
      <Header />
      <section className="intro">
        <div className="container">
          <h1 className="intro__title">Quiz App</h1>
          <p className="intro__text">
            Place to test your skills by attending{" "}
            <em>
              <b>basic</b>
            </em>{" "}
            quick test.
          </p>
        </div>
      </section>
      <div className="container questions">
        <article className="quiz-card quiz-card--html">
          <h2 className="quiz-card__title">HTML</h2>
          <p className="quiz-card__desc">
            This module contains basic questions to test your HTML knowlage.
          </p>
          <Link to="/html" className="quiz-card__link">
            <MdAssignment /> take test
          </Link>
        </article>
        <article className="quiz-card quiz-card--css">
          <h2 className="quiz-card__title">CSS</h2>
          <p className="quiz-card__desc">
            This module contains basic questions to test your CSS knowlage.
          </p>
          <Link to="/css" className="quiz-card__link">
            <MdAssignment /> take test
          </Link>
        </article>
        <article className="quiz-card quiz-card--js">
          <h2 className="quiz-card__title">JavaScript</h2>
          <p className="quiz-card__desc">
            This module contains basic questions to test your JavaScript
            knowlage.
          </p>
          <Link to="/javascript" className="quiz-card__link">
            <MdAssignment /> take test
          </Link>
        </article>
        <article className="quiz-card quiz-card--ts">
          <h2 className="quiz-card__title">TypeScript</h2>
          <p className="quiz-card__desc">
            This module contains basic questions to test your TypeScript
            knowlage.
          </p>
          <Link to="/typescript" className="quiz-card__link">
            <MdAssignment /> take test
          </Link>
        </article>
        <article className="quiz-card quiz-card--py">
          <h2 className="quiz-card__title">Python</h2>
          <p className="quiz-card__desc">
            This module contains basic questions to test your Python knowlage.
          </p>
          <Link to="/python" className="quiz-card__link">
            <MdAssignment /> take test
          </Link>
        </article>
        <article className="quiz-card quiz-card--java">
          <h2 className="quiz-card__title">Java</h2>
          <p className="quiz-card__desc">
            This module contains basic questions to test your Java knowlage.
          </p>
          <Link to="/java" className="quiz-card__link">
            <MdAssignment /> take test
          </Link>
        </article>
      </div>
    </main>
  );
}

export default Home;
