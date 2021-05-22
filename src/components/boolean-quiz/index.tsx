import "./boolean-quiz.scss";

interface BooleanQuizNormalProps {
  id: string;
  text: string;
  status: "unanswered";
  answer: boolean | null;
  handleAnswerChange(answer: boolean): void;
}
interface BooleanQuizAnswerdProps {
  id: string;
  text: string;
  answer: boolean | null;
  status: "answered";
}

export type BooleanQuizPropsTypes =
  | BooleanQuizAnswerdProps
  | BooleanQuizNormalProps;

function BooleanQuiz(props: BooleanQuizPropsTypes) {
  const { id, text, answer } = props;

  const handleChange = (answer: boolean) => {
    if (props.status === "unanswered") {
      props.handleAnswerChange(answer);
    }
  };

  return (
    <div
      className={[props.status, "boolean-quiz"].join(" ")}
      data-testid="boolean-quiz"
    >
      <pre className="boolean-quiz__question">{text}</pre>
      <ol className="boolean-quiz__ans-list">
        <li className="boolean-quiz__ans-item">
          <label
            htmlFor={id + "_true"}
            className={[
              answer === true && props.status === "answered" ? "correct" : "",
              "boolean-quiz__ans",
            ].join(" ")}
          >
            <input
              type="radio"
              name={id}
              id={id + "_true"}
              checked={answer === true}
              onChange={() => handleChange(true)}
              disabled={props.status === "answered"}
            />
            true
          </label>
        </li>
        <li className="boolean-quiz__ans-item">
          <label
            htmlFor={id + "_false"}
            className={[
              answer === false && props.status === "answered" ? "correct" : "",
              "boolean-quiz__ans",
            ].join(" ")}
          >
            <input
              type="radio"
              name={id}
              id={id + "_false"}
              checked={answer === false}
              onChange={() => handleChange(false)}
              disabled={props.status === "answered"}
            />
            false
          </label>
        </li>
      </ol>
    </div>
  );
}

export default BooleanQuiz;
