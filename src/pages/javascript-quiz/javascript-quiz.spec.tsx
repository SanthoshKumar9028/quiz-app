import { fireEvent } from "@testing-library/react";
import { IState } from "../../redux/types";

import { renderWithRedux } from "../../utils/render-with-redux";
import JavaScriptQuiz from "./index";

const initialState: IState = {
  user: {
    score: 0,
  },
  javascript: {
    totalQuestions: 2,
    questions: [
      {
        type: "QBOOLEAN",
        title: "test title one",
        answer: true,
        userAnswer: null,
      },
      {
        type: "QBOOLEAN",
        title: "test title two",
        answer: false,
        userAnswer: null,
      },
    ],
  },
};

describe("JavaScriptQuiz component", () => {
  it("should render", () => {
    const { getByText } = renderWithRedux(<JavaScriptQuiz />, { initialState });
    expect(getByText("test title one")).toBeInTheDocument();
  });

  it("should show the result component", () => {
    const { getByText } = renderWithRedux(<JavaScriptQuiz />, {
      initialState,
    });

    fireEvent.click(getByText("NEXT"));
    fireEvent.click(getByText("NEXT"));

    expect(getByText("Skiped Questions : 2")).toBeInTheDocument();
  });

  it("should change the state", () => {
    const { getAllByRole, store } = renderWithRedux(<JavaScriptQuiz />, {
      initialState,
    });

    expect(
      (store.getState() as IState).javascript.questions[0].userAnswer
    ).toBeNull();

    fireEvent.click(getAllByRole("radio")[1]);

    expect(
      (store.getState() as IState).javascript.questions[0].userAnswer
    ).toBe(false);
  });
});
