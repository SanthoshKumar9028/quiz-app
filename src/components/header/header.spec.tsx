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
  it("should render with initial score", async () => {
    const { findByText } = renderWithRedux(<Header />, { initialState });
    expect(await findByText("0 ~ score")).toBeInTheDocument();
  });

  it("should render with updated score", async () => {
    const { findByText, store } = renderWithRedux(<Header />, {
      initialState,
    });

    store.dispatch(incrementScoreByActionCreator(5));
    let el = await findByText("5 ~ score");
    expect(el).toBeInTheDocument();
  });
});
