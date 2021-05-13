import { render } from "@testing-library/react";
import { FC } from "react";

import { wraper } from "./index";

describe("loading-wraper", () => {
  it("render", () => {
    const Component = wraper(() => <p>loading</p>);
    const { getByTestId } = render(<Component />);

    expect(getByTestId("loading-wraper")).toBeInTheDocument();
  });

  it("render with component", () => {
    const Component = wraper(() => <p>loading</p>);
    const { getByText } = render(<Component />);

    expect(getByText("loading")).toBeInTheDocument();
  });

  it("pass props to its component", () => {
    const FuncComp: FC<{ text: string }> = ({ text }) => <p>{text} loading</p>;
    const Component = wraper(FuncComp);

    const { getByText } = render(<Component text="spinner" />);

    expect(getByText("spinner loading")).toBeInTheDocument();
  });
});
