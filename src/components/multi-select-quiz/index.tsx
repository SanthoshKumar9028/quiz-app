import React from "react";
import { IChoiceOption } from "../../redux/types";

import "./multi-select-quiz.scss";

interface MultiSelectQuizNormalProps {
  id: string;
  text: string;
  status: "unanswered";
  answer: null | string[];
  handleAnswerChange(answer: null | string[]): void;
  options: IChoiceOption[];
}
interface MultiSelectQuizAnsweredProps {
  id: string;
  text: string;
  status: "answered";
  answer: null | string[];
  options: IChoiceOption[];
}

export type MultiSelectQuizPropsTypes =
  | MultiSelectQuizNormalProps
  | MultiSelectQuizAnsweredProps;

function MultiSelectQuiz(props: MultiSelectQuizPropsTypes) {
  const { id, text, answer, options } = props;

  const handleChangeFor = (key: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        addOption(key, answer || []);
      } else {
        removeOption(key, answer || []);
      }
    };
  };

  const addOption = (key: string, ans: string[]) => {
    if (props.status === "unanswered") {
      props.handleAnswerChange([...ans, key]);
    }
  };

  const removeOption = (key: string, ans: string[]) => {
    ans = ans.filter((value) => value !== key);
    if (props.status === "unanswered") {
      props.handleAnswerChange(ans.length === 0 ? null : ans);
    }
  };

  return (
    <div
      className={[props.status, "multi-select-quiz"].join(" ")}
      data-testid="multi-select-quiz"
    >
      <pre className="multi-select-quiz__question">{text}</pre>
      <ol className="multi-select-quiz__ans-list">
        {options.map(({ key, value }) => (
          <li key={key} className="multi-select-quiz__ans-item">
            <label
              htmlFor={id + key}
              className={[
                answer && answer.includes(value) && props.status === "answered"
                  ? "correct"
                  : "",
                "multi-select-quiz__ans",
              ].join(" ")}
            >
              <input
                type="checkbox"
                name={id}
                id={id + key}
                checked={!!(answer && answer.includes(value))}
                onChange={handleChangeFor(value)}
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

export default MultiSelectQuiz;
