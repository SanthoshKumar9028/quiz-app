import { fireEvent } from "@testing-library/react";
import { IState } from "../../redux/types";

import { renderWithRedux } from "../../utils/render-with-redux";
import TestQuizs from "./index";

const initialState: IState = {
  user: {
    score: 0,
  },
  javascript: {
    totalQuestions: 2,
    questions: [
      {
        id: 1,
        type: "QBOOLEAN",
        title: "test title one",
        answer: true,
        userAnswer: null,
      },
      {
        id: 2,
        type: "QBOOLEAN",
        title: "test title two",
        answer: false,
        userAnswer: null,
      },
    ],
  },
};

describe("TestQuizs Component", () => {
  it("should render", () => {
    const { getByText } = renderWithRedux(<TestQuizs language="javascript" />, {
      initialState,
    });
    expect(getByText("test title one")).toBeInTheDocument();
  });

  describe("TestQuizs Component for javascript", () => {
    it("should show the result component", () => {
      const { getByText, getByTestId } = renderWithRedux(
        <TestQuizs language="javascript" />,
        {
          initialState,
        }
      );

      fireEvent.click(getByText("NEXT"));
      fireEvent.click(getByText("NEXT"));

      fireEvent.click(getByTestId("modal-opn-btn"));
      expect(document.querySelector(".ReactModalPortal")).toHaveTextContent(
        "FINAL RESULT"
      );
      expect(getByTestId("total-questions")).toHaveTextContent("2");
      expect(getByTestId("correct-questions")).toHaveTextContent("0");
      expect(getByTestId("incorrect-questions")).toHaveTextContent("0");
      expect(getByTestId("ignored-questions")).toHaveTextContent("2");
    });

    it("should change the state", () => {
      const { getAllByRole, store } = renderWithRedux(
        <TestQuizs language="javascript" />,
        {
          initialState,
        }
      );

      expect(
        (store.getState() as IState).javascript.questions[0].userAnswer
      ).toBeNull();

      fireEvent.click(getAllByRole("radio")[1]);

      expect(
        (store.getState() as IState).javascript.questions[0].userAnswer
      ).toBe(false);
    });
  });
});
