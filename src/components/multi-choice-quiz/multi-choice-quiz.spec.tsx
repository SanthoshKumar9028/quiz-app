import { render, fireEvent } from "@testing-library/react";

import MultiChoice from "./index";

describe("multi-choice quiz component", () => {
  const options = [
    { key: "test", value: "test" },
    { key: "mock", value: "mock" },
  ];
  it("should render without error", () => {
    const { getByTestId } = render(
      <MultiChoice
        status="unanswered"
        text="test question"
        answer={null}
        options={options}
        handleAnswerChange={() => {}}
      />
    );
    expect(getByTestId("multi-choice-quiz")).toBeInTheDocument();
    expect(getByTestId("multi-choice-quiz")).toHaveClass("multi-choice-quiz");
  });

  it("should change pass the ans to the parent component", () => {
    let answer = null;
    const myFun = jest.fn((a: any) => (answer = a));

    const { getAllByRole } = render(
      <MultiChoice
        status="unanswered"
        text="test question"
        answer={null}
        options={options}
        handleAnswerChange={myFun}
      />
    );

    fireEvent.click(getAllByRole("radio")[0]);
    expect(answer).toBe("test");
    expect(myFun).toHaveBeenCalledTimes(1);

    fireEvent.click(getAllByRole("radio")[1]);
    expect(answer).toBe("mock");

    expect(myFun).toHaveBeenCalledTimes(2);
  });

  it("should be disable the inputs", () => {
    const { getAllByRole } = render(
      <MultiChoice
        text="test question"
        status="answered"
        answer="test"
        options={options}
      />
    );
    const radioButtons = getAllByRole("radio");

    expect(radioButtons[0]).toBeChecked();
    expect(radioButtons[1]).not.toBeChecked();

    expect(radioButtons[0]).toBeDisabled();
    expect(radioButtons[1]).toBeDisabled();
  });
});
