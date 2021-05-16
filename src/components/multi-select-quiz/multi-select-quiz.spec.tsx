import { render, fireEvent } from "@testing-library/react";

import MultiSelectQuiz from "./index";

describe("multi-choice quiz component", () => {
  const options = [
    { key: "1", value: "one" },
    { key: "2", value: "two" },
    { key: "3", value: "three" },
  ];

  it("should render without error", () => {
    const { getByTestId } = render(
      <MultiSelectQuiz
        id={1}
        options={options}
        answer={null}
        status="unanswered"
        text="test question title"
        handleAnswerChange={() => {}}
      />
    );
    expect(getByTestId("multi-select-quiz")).toBeInTheDocument();
  });

  it("should change pass the ans to the parent component", () => {
    let answer = null;
    const myFun = jest.fn((a: any) => (answer = a));

    const { getAllByRole } = render(
      <MultiSelectQuiz
        id={1}
        options={options}
        answer={["one"]}
        status="unanswered"
        text="test question title"
        handleAnswerChange={myFun}
      />
    );

    fireEvent.click(getAllByRole("checkbox")[0]);
    expect(answer).toEqual(null);
    expect(myFun).toHaveBeenCalledTimes(1);

    fireEvent.click(getAllByRole("checkbox")[1]);
    expect(answer).toEqual(["one", "two"]);
    expect(myFun).toHaveBeenCalledTimes(2);
  });

  it("should be disable the inputs", () => {
    const { getAllByRole } = render(
      <MultiSelectQuiz
        id={1}
        status="answered"
        options={options}
        answer={["one"]}
        text="test question title"
      />
    );
    const checkboxButtons = getAllByRole("checkbox");

    expect(checkboxButtons[0]).toBeChecked();
    expect(checkboxButtons[1]).not.toBeChecked();
    expect(checkboxButtons[2]).not.toBeChecked();

    expect(checkboxButtons[0]).toBeDisabled();
    expect(checkboxButtons[1]).toBeDisabled();
    expect(checkboxButtons[2]).toBeDisabled();
  });
});
