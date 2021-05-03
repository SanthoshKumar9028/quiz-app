import { fireEvent } from "@testing-library/react";

import { IState } from "../../redux/types";
import { renderWithRedux } from "../../utils/render-with-redux";
import FinalizeAnswer from "./index";

const initialState: IState = {
  user: {
    score: 0,
  },
  javascript: {
    totalQuestions: 3,
    questions: [
      {
        id: 1,
        type: "QBOOLEAN",
        title: "test title one",
        answer: true,
        userAnswer: false,
      },
      {
        id: 2,
        type: "QBOOLEAN",
        title: "test title two",
        answer: false,
        userAnswer: null,
      },
      {
        id: 3,
        type: "QBOOLEAN",
        title: "test title three",
        answer: true,
        userAnswer: true,
      },
    ],
  },
  html: {
    totalQuestions: 0,
    questions: [],
  },
  css: {
    totalQuestions: 0,
    questions: [],
  },
  typescript: {
    totalQuestions: 0,
    questions: [],
  },
};

describe("FinalizeAnswer component", () => {
  it("should render", () => {
    renderWithRedux(<FinalizeAnswer language="javascript" />, {
      initialState,
    });
    expect(document.querySelectorAll(".finalize-answer__item").length).toBe(3);
  });

  it("should not show the modal after clicking the close button", () => {
    const { getByTestId } = renderWithRedux(
      <FinalizeAnswer language="javascript" />,
      {
        initialState,
      }
    );

    fireEvent.click(getByTestId("modal-cls-btn"));
    expect(document.querySelector(".ReactModalPortal")).not.toHaveTextContent(
      "FINAL RESULT"
    );
  });

  it("should show the modal initially", () => {
    const { getByTestId } = renderWithRedux(
      <FinalizeAnswer language="javascript" />,
      {
        initialState,
      }
    );

    expect(document.querySelector(".ReactModalPortal")).toHaveTextContent(
      "FINAL RESULT"
    );
    expect(getByTestId("total-questions")).toHaveTextContent("3");
    expect(getByTestId("correct-questions")).toHaveTextContent("1");
    expect(getByTestId("incorrect-questions")).toHaveTextContent("1");
    expect(getByTestId("ignored-questions")).toHaveTextContent("1");
  });

  it("should show the result questions", () => {
    const { getAllByText } = renderWithRedux(
      <FinalizeAnswer language="javascript" />,
      {
        initialState,
      }
    );

    expect(getAllByText("You ignored this question.").length).toBe(1);
  });

  it("should update the score to the store", async () => {
    const { findByText } = renderWithRedux(
      <FinalizeAnswer language="javascript" />,
      {
        initialState,
      }
    );
    expect(await findByText("1 ~ score")).toBeInTheDocument();
  });
});
