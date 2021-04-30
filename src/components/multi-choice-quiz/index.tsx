import { IMultipleChoiceOption } from "../../redux/types";

import "./multi-choice-quiz.scss";

interface MultiChoiceQuizNormalProps {
  text: string;
  status: "unanswered";
  answer: string | null;
  handleAnswerChange(answer: string): void;
  options: IMultipleChoiceOption[];
}
interface MultiChoiceQuizAnsweredProps {
  text: string;
  status: "answered";
  answer: string | null;
  options: IMultipleChoiceOption[];
}

export type MultiChoiceQuizPropsTypes =
  | MultiChoiceQuizNormalProps
  | MultiChoiceQuizAnsweredProps;

function MultiChoiceQuiz(props: MultiChoiceQuizPropsTypes) {
  const { text, answer, options } = props;

  const handleChange = (answer: string) => {
    if (props.status === "unanswered") {
      props.handleAnswerChange(answer);
    }
  };

  return (
    <div
      className={[props.status, "multi-choice-quiz"].join(" ")}
      data-testid="multi-choice-quiz"
    >
      <pre className="multi-choice-quiz__question">{text}</pre>
      <ol className="multi-choice-quiz__ans-list">
        {options.map(({ key, value }) => (
          <li key={key} className="multi-choice-quiz__ans-item">
            <label
              htmlFor={text + key}
              className={[
                answer === value && props.status === "answered"
                  ? "correct"
                  : "",
                "multi-choice-quiz__ans",
              ].join(" ")}
            >
              <input
                type="radio"
                name={text}
                id={text + key}
                checked={answer === value}
                onChange={() => handleChange(value)}
                disabled={props.status === "answered"}
              />
              {key}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MultiChoiceQuiz;
