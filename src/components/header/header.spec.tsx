import { IState } from "../../redux/types";

import { renderWithRedux } from "../../utils/render-with-redux";
import { incrementScoreByActionCreator } from "../../redux/user";
import Header from "./index";

const initialState: IState = {
  user: {
    score: 0,
  },
  javascript: {
    totalQuestions: 0,
    questions: [],
  },
};

describe("Header Component", () => {
  it("should render with initial score", () => {
    const { getByTestId } = renderWithRedux(<Header />, { initialState });
    expect(getByTestId("score")).toHaveTextContent("0 ~ score");
  });

  it("should render with updated score", async () => {
    const { getByTestId, store } = renderWithRedux(<Header />, {
      initialState,
    });

    store.dispatch(incrementScoreByActionCreator(5));
    expect(getByTestId("score")).toHaveTextContent("5 ~ score");
  });
});
