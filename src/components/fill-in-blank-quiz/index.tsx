import { useEffect, useRef } from "react";

import "./fill-in-blank-quiz.scss";

interface FillInQuizNormalProps {
  id: string;
  text: string;
  status: "unanswered";
  answer: string | null;
  handleAnswerChange(answer: string): void;
}
interface FillInQuizAnswerdProps {
  id: string;
  text: string;
  answer: string | null;
  status: "answered";
}

export type FillInQuizPropsTypes =
  | FillInQuizAnswerdProps
  | FillInQuizNormalProps;

function FillInQuiz(props: FillInQuizPropsTypes) {
  const inputRef = useRef<HTMLInputElement | null>();
  const { id, text, answer } = props;

  const handleChange = (answer: string) => {
    if (props.status === "unanswered") {
      props.handleAnswerChange(answer.trim());
    }
  };

  useEffect(() => {
    //auto focusing the input element
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div
      className={[props.status, "fill-in-quiz"].join(" ")}
      data-testid="fill-in-quiz"
    >
      <pre className="fill-in-quiz__question">{text}</pre>
      <input
        ref={(element) => (inputRef.current = element)}
        type="text"
        name={id}
        value={answer || ""}
        onChange={(e) => handleChange(e.target.value)}
        disabled={props.status === "answered"}
        className="fill-in-quiz__text-box"
      />
    </div>
  );
}

export default FillInQuiz;
