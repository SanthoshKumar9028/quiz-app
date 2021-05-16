import { IChoiceOption } from "../../redux/types";

import "./multi-choice-quiz.scss";

interface MultiChoiceQuizNormalProps {
  id: number;
  text: string;
  status: "unanswered";
  answer: string | null;
  handleAnswerChange(answer: string): void;
  options: IChoiceOption[];
}
interface MultiChoiceQuizAnsweredProps {
  id: number;
  text: string;
  status: "answered";
  answer: string | null;
  options: IChoiceOption[];
}

export type MultiChoiceQuizPropsTypes =
  | MultiChoiceQuizNormalProps
  | MultiChoiceQuizAnsweredProps;

function MultiChoiceQuiz(props: MultiChoiceQuizPropsTypes) {
  const { id, text, answer, options } = props;

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
              htmlFor={id + key}
              className={[
                answer === value && props.status === "answered"
                  ? "correct"
                  : "",
                "multi-choice-quiz__ans",
              ].join(" ")}
            >
              <input
                type="radio"
                name={String(id)}
                id={id + key}
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
