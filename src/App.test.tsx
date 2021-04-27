import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRedux } from "./utils/render-with-redux";

test("renders learn react link", () => {
  renderWithRedux(<App />);
  const linkElement = screen.getByText(/quiz app/i);
  expect(linkElement).toBeInTheDocument();
});
