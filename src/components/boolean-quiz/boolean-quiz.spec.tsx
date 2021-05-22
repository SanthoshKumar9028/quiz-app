import { render, fireEvent } from "@testing-library/react";

import BooleanQuiz from "./index";

describe("boolean quiz component", () => {
  it("should render without error", () => {
    const { getByTestId } = render(
      <BooleanQuiz
        id="1"
        status="unanswered"
        text="test question"
        answer={null}
        handleAnswerChange={() => console.log("test handleer")}
      />
    );
    expect(getByTestId("boolean-quiz")).toBeInTheDocument();
    expect(getByTestId("boolean-quiz")).toHaveClass("boolean-quiz");
  });

  it("should change pass the ans to the parent component", () => {
    let answer = null;
    const myFun = jest.fn((a) => (answer = a));

    const { getByLabelText } = render(
      <BooleanQuiz
        id="1"
        status="unanswered"
        text="test question"
        answer={null}
        handleAnswerChange={myFun}
      />
    );

    fireEvent.click(getByLabelText("true"));
    expect(answer).toBe(true);

    expect(myFun).toHaveBeenCalledTimes(1);

    fireEvent.click(getByLabelText("false"));
    expect(answer).toBe(false);

    expect(myFun).toHaveBeenCalledTimes(2);
  });
  it("should be disable the inputs", () => {
    const { getAllByRole } = render(
      <BooleanQuiz
        id="1"
        status="answered"
        text="test question"
        answer={true}
      />
    );
    const radioButtons = getAllByRole("radio");

    expect(radioButtons[0]).toBeChecked();
    expect(radioButtons[1]).not.toBeChecked();

    expect(radioButtons[0]).toBeDisabled();
    expect(radioButtons[1]).toBeDisabled();
  });
});
