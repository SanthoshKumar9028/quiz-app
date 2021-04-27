import { useState } from "react";

interface BooleanQuizNormalProps {
  text: string;
  status: "normal";
  handleAnswerChange(answer: boolean): void;
}
interface BooleanQuizAnswerdProps {
  text: string;
  answer: boolean;
  status: "answered";
}

type PropsTypes = BooleanQuizAnswerdProps | BooleanQuizNormalProps;

function BooleanQuiz(props: PropsTypes) {
  const [isChecked, setIsChecked] = useState<boolean | null>(null);

  const { text } = props;
  let isFalseChecked = false;
  let isTrueChecked = false;

  const handleChange = (answer: boolean) => {
    if (props.status === "normal") {
      props.handleAnswerChange(answer);
    }
    setIsChecked(answer);
  };

  if (props.status === "answered") {
    if (props.answer === true) isTrueChecked = true;
    else if (props.answer === false) isFalseChecked = true;
  } else {
    if (isChecked === true) isTrueChecked = true;
    else if (isChecked === false) isFalseChecked = true;
  }

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
            checked={isTrueChecked}
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
            checked={isFalseChecked}
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
