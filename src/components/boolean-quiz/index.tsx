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
      <p className="boolean-quiz__question">{text}</p>
      <div className="boolean-quiz__ans-section">
        <label htmlFor={text + "_true"} className="boolean-quiz__ans">
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

        <label htmlFor={text + "_false"} className="boolean-quiz__ans">
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
      </div>
    </div>
  );
}

export default BooleanQuiz;
