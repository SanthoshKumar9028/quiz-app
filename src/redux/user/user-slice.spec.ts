import reducer, { incrementScoreByActionCreator } from "./index";

describe("user slice", () => {
  it("should increment the score by 2", () => {
    const userState = { score: 0 };
    expect(reducer(userState, incrementScoreByActionCreator())).toEqual({
      score: 2,
    });
  });

  it("should increment the score by 3", () => {
    const userState = { score: 0 };
    expect(reducer(userState, incrementScoreByActionCreator(3))).toEqual({
      score: 3,
    });
  });
});
