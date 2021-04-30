import "./boolean-quiz.scss";

interface BooleanQuizNormalProps {
  text: string;
  status: "unanswered";
  answer: boolean | null;
  handleAnswerChange(answer: boolean): void;
}
interface BooleanQuizAnswerdProps {
  text: string;
  answer: boolean | null;
  status: "answered";
}

export type BooleanQuizPropsTypes =
  | BooleanQuizAnswerdProps
  | BooleanQuizNormalProps;

function BooleanQuiz(props: BooleanQuizPropsTypes) {
  const { text, answer } = props;

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
            htmlFor={text + "_true"}
            className={[
              answer === true && props.status === "answered" ? "correct" : "",
              "boolean-quiz__ans",
            ].join(" ")}
          >
            <input
              type="radio"
              name={text}
              id={text + "_true"}
              checked={answer === true}
              onChange={() => handleChange(true)}
              disabled={props.status === "answered"}
            />
            true
          </label>
        </li>
        <li className="boolean-quiz__ans-item">
          <label
            htmlFor={text + "_false"}
            className={[
              answer === false && props.status === "answered" ? "correct" : "",
              "boolean-quiz__ans",
            ].join(" ")}
          >
            <input
              type="radio"
              name={text}
              id={text + "_false"}
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
