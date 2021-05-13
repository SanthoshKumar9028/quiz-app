import { render } from "@testing-library/react";

import Spinner from "./index";

describe("Loading Spinner", () => {
  it("render", () => {
    const { getByTestId } = render(<Spinner />);

    expect(getByTestId("spinner")).toHaveClass("spinner");
  });
});
