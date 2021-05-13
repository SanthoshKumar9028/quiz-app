import { render, fireEvent } from "@testing-library/react";

import FillInBlankQuiz from "./index";

describe("fill-in-quiz component", () => {
  it("should render without error", () => {
    const { getByTestId, getByRole } = render(
      <FillInBlankQuiz
        id={1}
        status="unanswered"
        text="test question"
        answer={null}
        handleAnswerChange={() => console.log("test handleer")}
      />
    );
    expect(getByTestId("fill-in-quiz")).toBeInTheDocument();
    expect(getByTestId("fill-in-quiz")).toHaveClass("fill-in-quiz");
    expect(getByRole("textbox")).toHaveFocus();
  });

  it("should change pass the ans to the parent component", () => {
    let answer = null;
    const myFun = jest.fn((a) => (answer = a));

    const { getByRole } = render(
      <FillInBlankQuiz
        id={1}
        status="unanswered"
        text="test question"
        answer={null}
        handleAnswerChange={myFun}
      />
    );
    const textbox = getByRole("textbox");
    fireEvent.change(textbox, { target: { value: "hi" } });
    expect(answer).toBe("hi");

    expect(myFun).toHaveBeenCalledTimes(1);

    fireEvent.change(textbox, { target: { value: "hi world" } });
    expect(answer).toBe("hi world");

    expect(myFun).toHaveBeenCalledTimes(2);
  });

  it("should be disable the inputs", () => {
    render(
      <FillInBlankQuiz
        id={1}
        status="answered"
        text="test question"
        answer="correct answer"
      />
    );
    const textbox: HTMLInputElement | null =
      document.querySelector("input[type='text']");

    expect(textbox?.value).toBe("correct answer");
    expect(textbox).toBeDisabled();
  });
});
