import { IMultipleChoiceOption } from "../../redux/types";

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
      <p className="multi-choice-quiz__question">{text}</p>
      <div className="multi-choice-quiz__ans-section">
        {options.map(({ key, value }) => (
          <label
            key={key}
            htmlFor={text + key}
            className="multi-choice-quiz__ans"
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
        ))}
      </div>
    </div>
  );
}

export default MultiChoiceQuiz;
