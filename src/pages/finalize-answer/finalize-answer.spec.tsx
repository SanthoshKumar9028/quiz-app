import { IState } from "../../redux/types";
import { renderWithRedux } from "../../utils/render-with-redux";
import FinalizeAnswer from "./index";

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
        userAnswer: false,
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

describe("FinalizeAnswer component", () => {
  it("should render", () => {
    const { getAllByRole } = renderWithRedux(
      <FinalizeAnswer language="javascript" />,
      {
        initialState,
      }
    );
    expect(getAllByRole("listitem").length).toBe(2);
  });

  it("should counts the correct questions", () => {
    const { getByText } = renderWithRedux(
      <FinalizeAnswer language="javascript" />,
      {
        initialState,
      }
    );
    expect(getByText("Incorrect Questions : 1")).toBeInTheDocument();
    expect(getByText("Skiped Questions : 1")).toBeInTheDocument();
  });
});
